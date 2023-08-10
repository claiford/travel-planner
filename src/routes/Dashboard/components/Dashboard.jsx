import { useState, useEffect } from 'react';
import { Link, Outlet, useOutlet, useNavigate } from 'react-router-dom';

import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dialog, DialogTitle } from '@mui/material';
import AirplaneTicketRoundedIcon from '@mui/icons-material/AirplaneTicketRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import { grey } from '@mui/material/colors';

import { Configuration, OpenAIApi } from "openai";
import { createClient } from '@supabase/supabase-js'
import ShortUniqueId from 'short-unique-id';

const PROMPT_TEMPLATE = `
Plan an itinerary to {destination} for {num_days} days. \
For each day, provide a title and description of the day's activities, \
then list out the locations with their corresponding name, description, latitude and longitude values.

Structure the results in the following format: \
inside a days array, each day is represented as an object with "day_title", "day_desc", and "day_locs" properties. \
The "day_locs" property contains an array of objects, \
each representing a location visited on that day, with the "loc_name", "loc_desc", "loc_lat", and "loc_lon" values.
`

///// API CONFIGS /////
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const uid = new ShortUniqueId();

const supabaseUrl = 'https://yjysjahnpuhgzefdvkta.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
///// API CONFIGS /////

const Dashboard = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([]);
    const [generating, setGenerating] = useState({
        status: false,
        info: {
            title: "",
            destination: "",
            start_date: "",
            end_date: ""
        }
    });

    const [dialogOpen, setDialogOpen] = useState(false)

    const handleDialog = () => {
        setDialogOpen(dialogOpen ? false : true);
    }

    const getTrips = async () => {
        const { data, error } = await supabase
            .from('itineraries')
            .select()

        setTrips(data)
    }

    const addTrip = async (start_date, end_date, destination, title) => {
        console.log("GENERATING NEW TRIP");

        setGenerating({
            status: true,
            info: {
                title: title,
                destination: destination,
                start_date: start_date,
                end_date: end_date
            }
        })

        // calculate num_days using start and end dates
        const diff = new Date(end_date) - new Date(start_date)
        const num_days = Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;

        // generate itinerary using prompt
        const prompt = PROMPT_TEMPLATE.replace("{destination}", destination).replace("{num_days}", num_days);
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });
        const content = response.data.choices[0].message.content;
        const days = JSON.parse(content.replace(/[\r\n]/gm, '')).days

        // construct new itinerary object
        const newItinerary = {
            "id": uid.randomUUID(),
            "title": title,
            "destination": destination,
            "start_date": start_date,
            "end_date": end_date,
            "collaborators": {
                author: 'userID_xxx',
                editor: ['userID_1', 'userID_2', 'userID_3'],
                viewer: ['userID_4', 'userID_5', 'userID_6'],
            },
            "days": days
        }

        // insert new itinerary into database
        const { error } = await supabase
            .from('itineraries')
            .insert(newItinerary)

        // retrieve updated trips from database
        getTrips()

        setGenerating({
            status: false,
            info: {
                title: title,
                destination: destination,
                start_date: start_date,
                end_date: end_date
            }
        })
        handleDialog()

        console.log("NEW TRIP ADDED");
    }

    const deleteTrip = async (tripID) => {
        const { error } = await supabase
            .from('itineraries')
            .delete()
            .eq('id', tripID)

        // retrieve updated trips from database
        getTrips();

        navigate("/dashboard");
    }

    useEffect(() => {
        getTrips()
    }, []);

    const planArr = trips.map((trip) => {
        return (
            <ListItem disablePadding key={trip.id}>
                <Link to={`/dashboard/${trip.id}`} style={{ width: '100%', textDecoration: 'none', color: 'black' }}>
                    <ListItemButton>
                        <ListItemText primary={trip.title} />
                    </ListItemButton>
                </Link>
            </ListItem>
        )
    })

    return (
        <Box sx={{
            display: ' flex',
            height: '100%',
            width: '100%'
        }}>
            {/* Aside - List of trip belonging to user */}
            <Box sx={{ width: '20%', p: '20px', backgroundColor: grey[400] }}>
                <Typography variant="h5" fontWeight={700} align='left' p={2}>Your Trips</Typography>
                <List>
                    {planArr}
                </List>

                {/* New Trip functionalities */}
                {generating.status ? (
                    <Button sx={{ width: '80%', borderWidth: '2px', my: 4 }} variant="outlined" color="warning" size="large" onClick={handleDialog}>
                        <Typography fontWeight={700}>
                            Generating
                            <LinearProgress
                                color="warning"
                                sx={{ height: 10, borderRadius: 5, mx: 'auto', my: 1 }}
                            />
                        </Typography>
                    </Button>
                ) : (
                    <Link to={`/dashboard/new`}>
                        <Button sx={{ width: '80%', borderWidth: '2px', my: 4 }} variant="outlined" size="large">
                            <Typography fontWeight={700}>
                                New Trip
                            </Typography>
                        </Button>
                    </Link>
                )}
            </Box>

            {/* Content - Display trip summary */}
            <Box sx={{ width: '80%', position: 'relative' }}>
                {useOutlet() ? (
                    <Outlet context={[trips, addTrip, deleteTrip]} />
                ) : (
                    <h1>Select itinerary to view</h1>
                )}
            </Box>

            {/* Dialog popup for successful addTrip generation */}
            <Dialog open={dialogOpen} onClose={handleDialog} PaperProps={{ sx: { width: '40%', py: 5, borderRadius: 5 } }}>
                <DialogTitle>
                    <Typography
                        fontWeight={700}
                        fontSize={'1.5rem'}
                        letterSpacing={3}
                        align='center'
                        width='50%'
                        mx='auto'
                        p={2}
                        borderRadius={3}
                        backgroundColor={generating.status ? "#e9b872" : "#90a959"}
                    >
                        {generating.status ? "GENERATING" : "GENERATED"}
                    </Typography>
                </DialogTitle>
                <List sx={{ width: 'auto', mx: 'auto' }}>
                    <ListItem>
                        <ListItemIcon>
                            <AirplaneTicketRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={generating.info.title} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={generating.info.destination} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <TodayRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={generating.info.start_date} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EventRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={generating.info.end_date} />
                    </ListItem>
                </List>
            </Dialog>
        </Box>
    )
};

export default Dashboard;