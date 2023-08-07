import { useState, useEffect } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, Outlet, useOutlet } from 'react-router-dom';
import { Configuration, OpenAIApi } from "openai";
import ShortUniqueId from 'short-unique-id';
import { createClient } from '@supabase/supabase-js'

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
    const [trips, setTrips] = useState([]);

    const getTrips = async () => {
        const { data, error } = await supabase
            .from('itineraries')
            .select()

        setTrips(data)
    }

    const newTrip = async (start_date, end_date, destination, title) => {
        console.log("GENERATING NEW TRIP");
        
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

        console.log("NEW TRIP ADDED");
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
            <Box sx={{ width: '20%', p: '20px', border: '2px solid black' }}>
                <h3>Your trips</h3>
                <List>
                    {planArr}
                </List>
                <Link to={`/dashboard/new`}>
                    <Button sx={{ width: '80%' }} variant="outlined" size="large">+ New Trip +</Button>
                </Link>
            </Box>

            {/* Content - Display trip summary */}
            <Box sx={{ width: '80%', border: '2px solid black', position: 'relative' }}>
                {useOutlet() ? (
                    <Outlet context={[trips, newTrip]} />
                ) : (
                    <h1>Select itinerary to view</h1>
                )}
            </Box>
        </Box>
    )
};

export default Dashboard;