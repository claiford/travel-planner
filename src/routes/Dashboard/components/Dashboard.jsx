import { useState } from 'react';

import { Box, Container } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import travelData from '../../../travelData'

const Dashboard = () => {
    const [plan, setPlan] = useState(null)

    const handlePlan = (itinerary) => {
        setPlan((prevPlan) => itinerary)
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
            height: '100%'
        }}>
            {/* Aside - List of itineraries belonging to user */}
            <Container sx={{ width: '30%', height: '100%', border: '2px solid red' }}>
                <h3>Your itineraries</h3>
                <List>
                    {planArr}
                </List>
            </Container>

            {/* Content - Display itinerary overview */}
            <Container>
                { plan ? (
                    <h3>{plan.destination}</h3>
                ) : (
                    <h1>select an itinerary</h1>
                )}
            </Container>
            
        </Box>
    )
};

export default Dashboard;