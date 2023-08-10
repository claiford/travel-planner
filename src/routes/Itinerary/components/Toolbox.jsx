import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMap } from 'react-leaflet'
import L from 'leaflet';

import { Grid, Box, Stack, Button, IconButton, Typography, Checkbox, Collapse } from '@mui/material';
import { grey } from '@mui/material/colors';
import SquareIcon from '@mui/icons-material/Square';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

import DayInfo from './DayInfo';

const colors = {
    black: "#151515",
    red: "#a63d40",
    yellow: "#e9b872",
    blue: "#6494aa",
    green: "#90a959"
}
const Toolbox = ({ activeTrip, handleActiveDays, handleZoom }) => {
    const map = useMap();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawer = () => {
        if (drawerOpen) map.panBy(L.point(-150, 0));
        if (!drawerOpen) map.panBy(L.point(150, 0))
        setDrawerOpen(!drawerOpen)
    }

    const nodes = activeTrip.days.map((day, day_idx) => {
        return (
            <Box key={"node__" + day.day_title} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Checkbox
                    icon={<CropFreeRoundedIcon sx={{ color: 'white', border: `2px solid ${Object.values(colors)[day_idx]}`, borderRadius: 1 }} />}
                    checkedIcon={<SquareIcon sx={{ color: 'white', border: `2px solid ${Object.values(colors)[day_idx]}`, borderRadius: 1 }} />}
                    sx={{
                        width: 10,
                        height: 10,
                        mb: 1,
                    }}
                    defaultChecked={true}
                    onChange={() => handleActiveDays(day_idx + 1)}
                />
                <IconButton sx={{ height: '1.5rem', color: 'white', borderRadius: 1, '&:hover': { backgroundColor: grey[900] } }} onClick={() => handleZoom(day_idx + 1)}>
                    <Typography>{day_idx + 1}</Typography>
                </IconButton>
            </Box>
        )
    })

    return (
        <>
            {/* Sidebar */}
            <Box sx={{ display: 'flex', alignItems: 'center', height: 'calc(100% - 74px)', position: 'absolute', right: 0, top: 0, zIndex: '1002' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '600px',
                        backgroundColor: grey[800],
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        '&:hover': {
                            backgroundColor: grey[900],
                            cursor: 'pointer'
                        }
                    }}
                    onClick={handleDrawer}
                >
                    <Box
                        sx={{
                            width: 5,
                            height: '20%',
                            backgroundColor: grey[300],
                            borderRadius: 3,
                            mx: 0.7,
                        }}
                    >
                    </Box>
                </Box>
                <Collapse orientation="horizontal" in={drawerOpen}>
                    <DayInfo activeTrip={activeTrip} handleZoom={handleZoom}/>
                </Collapse>
            </Box>

            {/* Bottom Toolbar */}
            <Box sx={{ width: '100%', position: 'absolute', bottom: '0', zIndex: '1001', backgroundColor: grey[800] }}>
                <Grid container sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Grid item xs={1}>
                        <Link to={`/dashboard/${activeTrip.id}`}>
                            <Button variant='filled' color="info" sx={{ '&:hover': { backgroundColor: grey[900] } }}>
                                <KeyboardDoubleArrowLeftRoundedIcon sx={{ color: 'white' }} />
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={10}>
                        <Stack direction="row" justifyContent="center" spacing={3} sx={{ mt: 2, mb: 1 }}>
                            {nodes}
                        </Stack>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton variant='filled' color="info" sx={{ '&:hover': { backgroundColor: grey[900] } }} onClick={handleDrawer}>
                            <ModeEditRoundedIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton variant='filled' color="info" sx={{ '&:hover': { backgroundColor: grey[900] } }} onClick={() => handleZoom('reset')}>
                            <ZoomOutMapIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box >
        </>
    );
}

export default Toolbox;
