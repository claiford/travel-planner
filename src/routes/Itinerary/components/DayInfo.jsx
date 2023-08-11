import { Box, Button, IconButton, Typography } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { grey } from '@mui/material/colors';

const DayInfo = ({ activeTrip, handleZoom, focusInfo, handleInfo }) => {
    const infoArr = activeTrip.days.map((day, day_idx) => {
        const locArr = day.day_locs.map(((loc) => {
            return (
                <Box key={"info_" + loc.loc_name}>
                    <Box
                        sx={{
                            width: '100%',
                            p: 1,
                            borderTopLeftRadius: '4px',
                            borderTopRightRadius: '4px',
                            backgroundColor: grey[200]
                        }}
                    >
                        <Typography fontSize={'.9rem'} fontWeight={700}>{loc.loc_name}</Typography>
                        <Typography fontSize={'.7rem'}>{loc.loc_desc}</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            backgroundColor: grey[200]
                        }}
                    >
                        <Button variant="contained" color="warning" sx={{ width: '50%', borderRadius: '0px 0px 0px 4px' }} >
                            <ImportExportRoundedIcon sx={{ height: '.8rem', width: '.8rem' }} />
                        </Button>
                        <Button variant="contained" color="error" sx={{ width: '50%', borderRadius: '0px 0px 4px 0px' }}>
                            <DeleteRoundedIcon sx={{ height: '.8rem', width: '.8rem' }} />
                        </Button>
                    </Box>
                </Box>
            )
        }))
        return (
            <Box
                key={"info_" + day.day_title}
                sx={{
                    minHeight: '100%',
                    // display: 'flex',
                    display: (focusInfo === day_idx + 1) ? 'flex' : 'none',
                    flexDirection: 'column',
                    gap: 2,
                    p: 2,
                    overflow: 'auto'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center' }}>
                    <Typography>{day.day_title}</Typography>
                    <IconButton onClick={() => handleZoom(day_idx + 1)}>
                        <CenterFocusStrongRoundedIcon />
                    </IconButton>
                </Box>

                {locArr}
            </Box>
        )
    })

    return (
        <Box
            sx={{
                height: '600px',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: grey[300],
                p: 1
            }}
        >

            <IconButton
                sx={{
                    width: '30px',
                    height: '30px'
                }}
                onClick={() => handleInfo(focusInfo - 1)}
            >
                <KeyboardArrowUpRoundedIcon />
            </IconButton>

            <Box
                sx={{
                    height: '85%',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                {infoArr}
                {/* <Box
                    sx={{
                        position: 'relative',
                        top: '-500px'
                    }}
                >
                    {infoArr}
                </Box> */}
            </Box>

            <IconButton
                sx={{
                    width: '30px',
                    height: '30px'
                }}
                onClick={() => handleInfo(focusInfo + 1)}
            >
                <KeyboardArrowDownRoundedIcon />
            </IconButton>
        </Box>
    );
};

export default DayInfo;
