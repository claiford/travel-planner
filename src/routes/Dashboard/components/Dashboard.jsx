import { Box } from '@mui/material';
import { Button } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, Outlet, useOutlet } from 'react-router-dom';

import travelData from '../../../travelData'

const Dashboard = () => {

    const planArr = travelData.map((trip) => {
        return (
            <ListItem disablePadding key={trip.id}>
                <ListItemButton>
                    <Link to={`/dashboard/${trip.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItemText primary={trip.name} />
                    </Link>
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
                {useOutlet() ? (
                    <Outlet />
                ) : (
                    <h1>Select itinerary to view</h1>
                )}
            </Box>
        </Box>
    )
};

export default Dashboard;