import { Link, useParams, useOutletContext } from 'react-router-dom'

import { Box, Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { grey } from '@mui/material/colors';

import DayCard from "./DayCard";

const TripBrief = () => {
    const { tripID } = useParams()
    const trips = useOutletContext()[0];
    const deleteTrip = useOutletContext()[2]

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
                <Grid container spacing={0} sx={{ m: '20px' }}>
                    {/* destination and date */}
                    <Grid xs={12} sm={6} md={4}>
                        <h3>Destination:</h3>
                        <h1>{activeTrip.destination}</h1>
                    </Grid>
                    <Grid xs={0} md={4}></Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <h3>Date:</h3>
                        <h3>{activeTrip.start_date} - {activeTrip.end_date}</h3>
                    </Grid>

                    {/* travellers */}
                    {/* <Grid xs={4}>
                        <h3>Author</h3>
                        <h4>{activeTrip.collaborators.author}</h4>
                    </Grid>
                    <Grid xs={4}>
                        <h3>Editors</h3>
                        {editorArr}
                    </Grid>
                    <Grid xs={4}>
                        <h3>Viewers</h3>
                        {viewerArr}
                    </Grid> */}

                    {/* day cards */}
                    <Grid xs={12}>
                        {/* generate day cards based on trip.days */}
                        <Stack direction="row" spacing={1} sx={{ overflowX: 'scroll' }}>
                            {dayArr}
                        </Stack>
                    </Grid>
                </Grid>

                {/* actions */}
                <AppBar position="relative" sx={{ position: 'absolute', bottom: '0'}}>
                    <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: grey[800]  }} >
                        <Box>
                            <IconButton disabled>
                                <ShareRoundedIcon />
                            </IconButton>
                            <IconButton disabled>
                                <StarRoundedIcon />
                            </IconButton>
                            <IconButton onClick={() => deleteTrip(activeTrip.id)}>
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
                </AppBar>
            </>
        ) : (
            null
        )
    )
};

export default TripBrief;