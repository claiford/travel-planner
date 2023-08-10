import { useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom'

import { Box, Stack, Toolbar, IconButton, Button, Alert, Collapse, Typography } from '@mui/material'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import AirplaneTicketRoundedIcon from '@mui/icons-material/AirplaneTicketRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';

import { grey } from '@mui/material/colors';

import DayCard from "./DayCard";

const TripBrief = () => {
    const { tripID } = useParams()
    const trips = useOutletContext()[0];
    const deleteTrip = useOutletContext()[2]

    const [alertOpen, setAlertOpen] = useState(false);

    const handleAlert = () => {
        setAlertOpen(alertOpen ? false : true);
    };

    const handleDelete = () => {
        deleteTrip(activeTrip.id)
    };

    const activeTrip = trips.find((trip) => trip.id === tripID);

    const dayArr = activeTrip ? activeTrip.days.map((day, index) => {
        return (
            <DayCard key={index} day={day} num={index + 1} />
        )
    }) : null

    // const editorArr = activeTrip ? activeTrip.collaborators.editor.map((editor, index) => {
    //     return (
    //         <h4 key={index}>{editor}</h4>
    //     )
    // }) : null

    // const viewerArr = activeTrip ? activeTrip.collaborators.viewer.map((viewer, index) => {
    //     return (
    //         <h4 key={index}>{viewer}</h4>
    //     )
    // }) : null

    return (
        activeTrip ? (
            <>  
                {/* Trip Info */}
                <Box sx={{ display: 'flex', height: 'calc(100vh - 137px)' }}>
                    <Box sx={{ width: '30%', px:3, backgroundColor: grey[500] }}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <AirplaneTicketRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography fontSize={'1.5rem'} fontWeight={700}>
                                        {activeTrip.title}
                                    </Typography>} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography fontSize={'1.5rem'} fontWeight={700}>
                                        {activeTrip.destination}
                                    </Typography>} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <TodayRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography fontSize={'1.5rem'}>
                                        {activeTrip.start_date}
                                    </Typography>} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <EventRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography fontSize={'1.5rem'}>
                                        {activeTrip.end_date}
                                    </Typography>} />
                            </ListItem>
                        </List>
                    </Box>
                    {/* <Divider orientation="vertical" variant="middle" flexItem sx={{ borderWidth: 2, borderRadius: 5, borderColor: grey[600], backgroundColor: grey[600] }} /> */}
                    <Box sx={{ width: '70%', maxHeight: '100%', px: 3, backgroundColor: grey[700] }}>
                        <Stack spacing={1} sx={{ height: '100%', px: 2,  overflowX: 'scroll' }}>
                            {dayArr}
                        </Stack>
                    </Box>
                </Box>
               
                {/* Toolbar */}
                <Box sx={{ width: '100%', position: 'absolute', bottom: '0' }}>
                    <Collapse in={alertOpen}>
                        <Alert
                            variant="filled"
                            severity="warning"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '25%',
                                m: 1
                            }}
                        >
                            <Button variant='filled' color='info' onClick={handleDelete}>Confirm</Button>
                            <Button variant='filled' color='error' onClick={handleAlert}>Cancel</Button>
                        </Alert>
                    </Collapse>
                    <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: grey[800] }} >
                        <Box>
                            <IconButton disabled>
                                <ShareRoundedIcon />
                            </IconButton>
                            <IconButton disabled>
                                <StarRoundedIcon />
                            </IconButton>
                            <IconButton onClick={handleAlert}>
                                <DeleteRoundedIcon color='error' />
                            </IconButton>
                        </Box>
                        <Box>
                            <Link to={`/itinerary/${activeTrip.id}`}>
                                <Button
                                    sx={{ my: 2, color: 'white' }}
                                    variant="text"
                                    endIcon={<DoubleArrowRoundedIcon />}
                                >
                                    Details
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Box>
            </>
        ) : (
            null
        )
    )
};

export default TripBrief;