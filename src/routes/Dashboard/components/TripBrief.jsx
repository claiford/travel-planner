import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { Link, useParams, useOutletContext } from 'react-router-dom'

import DayCard from "./DayCard";

const TripBrief = () => {
    const {tripID} = useParams()
    const trips = useOutletContext();
    const activeTrip = trips.find((trip) => trip.id === tripID);

    const dayArr = activeTrip.days.map((day, index) => {
        return (
            <DayCard key={index} day={day} num={index + 1} />
        )
    })

    const editorArr = activeTrip.collaborators.editor.map((editor, index) => {
        return (
            <h4 key={index}>{editor}</h4>
        )
    })

    const viewerArr = activeTrip.collaborators.viewer.map((viewer, index) => {
        return (
            <h4 key={index}>{viewer}</h4>
        )
    })

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
                    <Grid xs={4}>
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
                    </Grid>

                    {/* day cards */}
                    <Grid xs={12}>
                        {/* generate day cards based on trip.days */}
                        <Stack direction="row" spacing={1} sx={{ overflowX: 'scroll' }}>
                            {dayArr}
                        </Stack>
                    </Grid>
                </Grid>

                {/* actions */}
                <AppBar position="relative" sx={{ position: 'absolute', bottom: '0' }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }} >
                        <Box>
                            <IconButton>
                                <ShareRoundedIcon />
                            </IconButton>
                            <IconButton>
                                <StarRoundedIcon color="warning" />
                            </IconButton>
                            <IconButton>
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
            <h1>select an itinerary</h1>
        )
    )
};

export default TripBrief;