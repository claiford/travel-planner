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

const colors = {
    black: "#151515",
    red: "#a63d40",
    yellow: "#e9b872",
    blue: "#6494aa",
    green: "#90a959"
}
const DRAWERWIDTH = 300;

const Toolbox = ({ activeTrip, handleActiveDays, handleZoom }) => {
    const map = useMap();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawer = () => {
        if (drawerOpen) map.panBy(L.point(-(DRAWERWIDTH / 2), 0));
        if (!drawerOpen) map.panBy(L.point((DRAWERWIDTH / 2), 0))
        setDrawerOpen(!drawerOpen)
    }

    const nodes = activeTrip.days.map((day, idx) => {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Checkbox
                    icon={<CropFreeRoundedIcon sx={{ color: 'white', border: `2px solid ${Object.values(colors)[idx]}`, borderRadius: 1 }} />}
                    checkedIcon={<SquareIcon sx={{ color: 'white', border: `2px solid ${Object.values(colors)[idx]}`, borderRadius: 1 }} />}
                    sx={{
                        width: 10,
                        height: 10,
                        mb: 1,
                    }}
                    defaultChecked={true}
                    onChange={() => handleActiveDays(idx + 1)}
                />
                <IconButton sx={{ height: '1.5rem', color: 'white', borderRadius: 1, '&:hover': { backgroundColor: grey[900] } }} onClick={() => handleZoom(idx + 1)}>
                    <Typography>{idx + 1}</Typography>
                </IconButton>
            </Box>
        )
    })

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', height: 'calc(100% - 74px)', position: 'absolute', right: 0, top: 0, zIndex: '1002' }}>
                <Box
                    sx={{
                        width: 8,
                        height: '20%',
                        backgroundColor: grey[800],
                        borderRadius: 3,
                        mx: 1,
                        '&:hover': {
                            backgroundColor: grey[900],
                            cursor: 'pointer'
                        }
                    }}
                    onClick={handleDrawer}
                >
                </Box>
                <Collapse orientation="horizontal" in={drawerOpen}>
                    <Box
                        sx={{
                            height: '700px',
                            width: DRAWERWIDTH,
                            backgroundColor: grey[300]
                        }}
                    >
                    </Box>
                </Collapse>
            </Box>
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
