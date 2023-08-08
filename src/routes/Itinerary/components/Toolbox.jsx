import { useState } from 'react';
import { Grid, Box, Button, IconButton, Typography, Checkbox } from '@mui/material';
import { FormControl, FormGroup, FormControlLabel } from '@mui/material';
import { grey } from '@mui/material/colors';
import Skeleton from '@mui/material/Skeleton';
import Drawer from '@mui/material/Drawer';
import SquareIcon from '@mui/icons-material/Square';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { Link } from 'react-router-dom';

const colors = {
    black: "#151515",
    red: "#a63d40",
    yellow: "#e9b872",
    blue: "#6494aa",
    green: "#90a959"
}
const drawerHeight = 500;

const Toolbox = ({ activeTrip, activeDays, handleActiveDays }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const nodes = activeTrip.days.map((day, idx) => {
        return (
            <FormControlLabel
                key={idx}
                value={idx + 1}
                control={<Checkbox
                    icon={<CropFreeRoundedIcon sx={{ color: 'white', border: `2px solid ${Object.values(colors)[idx]}`, borderRadius: 1 }} />}
                    checkedIcon={<SquareIcon sx={{ color: 'white', border: `2px solid ${Object.values(colors)[idx]}`, borderRadius: 1 }} />}
                    sx={{
                        width: 10,
                        height: 10,
                        mb: 1,
                    }}
                    checked={activeDays[String(idx + 1)]}
                    onChange={() => handleActiveDays(idx + 1)}
                />}
                label={<Typography sx={{ color: 'white' }}>{idx + 1}</Typography>}
                labelPlacement="bottom"
            />
        )
    })

    return (
        <Box sx={{ width: '100%', position: 'absolute', bottom: '0', zIndex: '1001' }}>
            <Box sx={{
                height: (open ? drawerHeight + 100 : 100),
                backgroundColor: grey[800]
            }}>
                <Grid container sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Grid item xs={1}>
                        <Link to={`/dashboard/${activeTrip.id}`}>
                            <Button variant='filled' color="info" sx={{'&:hover': { backgroundColor: grey[900] }}}>
                                <KeyboardDoubleArrowLeftRoundedIcon sx={{color: 'white'}}/>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl sx={{ display: 'block' }} component="fieldset">
                            <FormGroup aria-label="position" row sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                {nodes}
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Button
                    sx={{
                        width: '50%',
                        '&:hover': {
                            backgroundColor: grey[900],
                        }
                    }}
                    onClick={toggleDrawer}
                    edge="start"
                >
                    <Box sx={{
                        width: '90%',
                        height: 6,
                        backgroundColor: grey[500],
                        borderRadius: 3,
                    }}></Box>
                </Button>
            </Box>
            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        height: drawerHeight,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="bottom"
                open={open}
            >
                <Box
                    sx={{
                        px: 2,
                        py: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Skeleton variant="rectangular" height="100%" />
                </Box>
            </Drawer>
        </Box >
    );
}

export default Toolbox;
