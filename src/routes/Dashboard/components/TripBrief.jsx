import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

import DayCard from "./DayCard";

const TripBrief = ({ trip }) => {
    const dayArr = trip.days.map((day, index) => {
        return (
            <DayCard key={index} day={day} num={index + 1} />
        )
    })

    const editorArr = trip.collaborators.editor.map((editor, index) => {
        return (
            <h4 key={index}>{editor}</h4>
        )
    })

    const viewerArr = trip.collaborators.viewer.map((viewer, index) => {
        return (
            <h4 key={index}>{viewer}</h4>
        )
    })

    return (
        <>
            <Grid container spacing={0} sx={{ m: '20px' }}>
                {/* destination and date */}
                <Grid xs={12} sm={6} md={4}>
                    <h3>Destination:</h3>
                    <h1>{trip.destination}</h1>
                </Grid>
                <Grid xs={0} md={4}></Grid>
                <Grid xs={12} sm={6} md={4}>
                    <h3>Date:</h3>
                    <h3>{trip.start_date} - {trip.end_date}</h3>
                </Grid>

                {/* travellers */}
                <Grid xs={4}>
                    <h3>Author</h3>
                    <h4>{trip.collaborators.author}</h4>
                </Grid>
                <Grid xs={4}>
                    <h3>Editors</h3>
                    <h4>{editorArr}</h4>
                </Grid>
                <Grid xs={4}>
                    <h3>Viewers</h3>
                    <h4>{viewerArr}</h4>
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
                        <Button
                            sx={{ my: 2, color: 'white' }}
                            variant="text"
                            endIcon={<DoubleArrowRoundedIcon />}
                        >
                            Details
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default TripBrief;