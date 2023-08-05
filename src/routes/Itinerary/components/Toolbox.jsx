import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Typography, Checkbox } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Drawer from '@mui/material/Drawer';
import SquareIcon from '@mui/icons-material/Square';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';

const drawerHeight = 500;

const Toolbox = ({ activeTrip }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const nodes = activeTrip.days.map((day, idx) => {
        return (
            // <IconButton className="btn" key={day.day_title}>test</IconButton>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Checkbox
                    icon={<CropFreeRoundedIcon sx={{ color: 'white', border: '2px solid yellow', borderRadius: 1 }} />}
                    checkedIcon={<SquareIcon sx={{ color: 'white', border: '2px solid yellow', borderRadius: 1}} />}
                    sx={{
                        width: 10,
                        height: 10,
                    }}
                />
                <Typography sx={{ color: 'white' }}>{idx + 1}</Typography>
            </Box>
        )
    })

    return (
        <Box className="toolbox" sx={{ width: '100%', position: 'absolute', bottom: '0', zIndex: '1001' }}>
            <Box sx={{
                height: (open ? drawerHeight + 100 : 100),
                backgroundColor: "#404040"
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3,
                    px: 2,
                    pt: 2,
                }}>
                    {nodes}
                </Box>
                <Button
                    sx={{
                        width: '50%',
                        '&:hover': {
                            backgroundColor: '#2f2f2f',
                        }
                    }}
                    onClick={toggleDrawer}
                    edge="start"
                >
                    <Box sx={{
                        width: '90%',
                        height: 6,
                        backgroundColor: '#8f8f8f',
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
        </Box>
    );
}

export default Toolbox;



// import { useState } from 'react';
// import { Global } from '@emotion/react';
// import { styled } from '@mui/material/styles';
// import { grey } from '@mui/material/colors';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// const drawerBleeding = 30;

// function SwipeableEdgeDrawer({ activeTrip }) {
//     const [open, setOpen] = useState(false);

//     const toggleDrawer = (newOpen) => () => {
//         setOpen(newOpen);
//     };

//     const nodes = activeTrip.days.map((day) => {
//         return (
//             <Button className="btn" key={day.day_title}>test</Button>
//         )
//     })

//     return (
//         <>
//             {/* Setting height of Expansion */}
//             <Global
//                 styles={{
//                     '.MuiDrawer-root > .MuiPaper-root': {
//                         height: `calc(50% - ${drawerBleeding}px)`,
//                         overflow: 'visible',
//                     },
//                 }}
//             />
//             <SwipeableDrawer
//                 anchor="bottom"
//                 open={open}
//                 onClose={toggleDrawer(false)}
//                 onOpen={toggleDrawer(true)}
//                 swipeAreaWidth={drawerBleeding}
//                 disableSwipeToOpen={false}
//                 ModalProps={{
//                     keepMounted: true,
//                 }}
//             >
//                 {/* Overflow */}
//                 <Box
//                     sx={{
//                         height: drawerBleeding,
//                         position: 'absolute',
//                         top: -drawerBleeding,
//                         visibility: 'visible',
//                         right: 0,
//                         left: 0,
//                         backgroundColor: "#404040"
//                     }}
//                 >
//                     {/* Puller */}
//                     <Box sx={{
//                         width: 30,
//                         height: 6,
//                         backgroundColor: '#8f8f8f',
//                         borderRadius: 3,
//                         position: 'absolute',
//                         bottom: (drawerBleeding / 2) - 3,
//                         left: 'calc(50% - 15px)',
//                     }}></Box>
//                 </Box>

//                 {/* Drawer content */}
//                 <Box
//                     sx={{
//                         px: 2,
//                         py: 2,
//                         height: '100%',
//                         overflow: 'auto',
//                     }}
//                 >
//                     <Skeleton variant="rectangular" height="100%" />
//                 </Box>
//             </SwipeableDrawer>
//         </>
//     );
// }

// export default SwipeableEdgeDrawer;