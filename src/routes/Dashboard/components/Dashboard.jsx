import { useState, useEffect } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, Outlet, useOutlet } from 'react-router-dom';
import { Configuration, OpenAIApi } from "openai";
import ShortUniqueId from 'short-unique-id';
import { createClient } from '@supabase/supabase-js'

const PROMPT_TEMPLATE = `
Plan an itinerary to {destination} for {num} days.\
For each day, provide a title and description of the day's activities,\
then list out the locations with their corresponding name, description, latitude and longitude values.

Structure the results in the following format:\
inside a days array, each day is represented as an object with "day_title", "day_desc", and "day_locs" properties.\
The "day_locs" property contains an array of objects,\
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

    const newTrip = async () => {
        const prompt = PROMPT_TEMPLATE.replace("{destination}", "Singapore").replace("{num}", "1");

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            // max_tokens: 100,
        });

        const result = response.data.choices[0].message.content;
        console.log(JSON.parse(result.replace(/[\r\n]/gm, '')));

        console.log(uid.randomUUID());
    }

    const getTrips = async () => {
        const { data, error } = await supabase
            .from('itineraries')
            .select()

        setTrips(data)
    }

    useEffect(() => {
        getTrips()
    }, []);

    const planArr = trips.map((trip) => {
        return (
            <ListItem disablePadding key={trip.id}>
                <Link to={`/dashboard/${trip.id}`} style={{ width: '100%', textDecoration: 'none', color: 'black' }}>
                    <ListItemButton>
                        <ListItemText primary={trip.name} />
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
                <h3>Your itineraries</h3>
                <List>
                    {planArr}
                </List>
                <Button sx={{ width: '80%' }} variant="outlined" color="success" size="large" onClick={newTrip}>+ New Trip +</Button>
            </Box>

            {/* Content - Display trip summary */}
            <Box sx={{ width: '80%', border: '2px solid black', position: 'relative' }}>
                {useOutlet() ? (
                    <Outlet context={trips}/>
                ) : (
                    <h1>Select itinerary to view</h1>
                )}
            </Box>
        </Box>
    )
};

export default Dashboard;