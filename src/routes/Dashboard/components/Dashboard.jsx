import { useState } from 'react';

import { Box } from '@mui/material';
import { Button } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import travelData from '../../../travelData'
import TripBrief from './TripBrief';

const Dashboard = () => {
    const [trip, setTrip] = useState(null)

    const handlePlan = (itinerary) => {
        setTrip((prevTrip) => itinerary)
    };

    const planArr = travelData.map((itinerary) => {
        return (
            <ListItem disablePadding key={itinerary.id}>
                <ListItemButton onClick={() => handlePlan(itinerary)}>
                    <ListItemText primary={itinerary.name} />
                </ListItemButton>
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
                <Button sx={{ width: '80%' }} variant="outlined" color="success" size="large">+ New Trip +</Button>
            </Box>

            {/* Content - Display trip summary */}
            <Box sx={{ width: '80%', border: '2px solid black', position: 'relative' }}>
                { trip ? (
                    <TripBrief trip={trip}/>
                ) : (
                    <h1>select an itinerary</h1>
                )}
            </Box>
        </Box>
    )
};

export default Dashboard;