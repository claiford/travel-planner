import { Box, Fade, Slide, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const images = require.context('../images')
const imageList = images.keys().map(image => images(image));

const Display = ({ activeStep }) => {
    const slideZero = (
        <>
            <Fade in={activeStep === 0} timeout={2000}><img src={imageList[0]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom' }} alt={"home"}></img></Fade>
            <Slide direction="up" in={activeStep === 0} timeout={1000} mountOnEnter unmountOnExit>
                <Box sx={{ position: 'absolute', left: '10%', top: '15%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'start', maxWidth: '350px' }}>
                    <Typography variant="h2" fontWeight={700} align="left">G<span style={{color: grey[700]}}>enerate</span></Typography>
                    <Typography variant="h6" fontWeight={400} align="left">
                        Choose your dream destination and travel dates, then kick back and let us craft the trip for you.
                    </Typography>
                </Box>
            </Slide>
        </>
    )

    const slideOne = (
        <>
            <Fade in={activeStep === 1} timeout={2000}><img src={imageList[1]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left' }} alt={"home"}></img></Fade>
            <Slide direction="right" in={activeStep === 1} timeout={1000} mountOnEnter unmountOnExit>
                <Box sx={{ position: 'absolute', left: '50%', right: '10%', top: '40%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'start', maxWidth: '350px' }}>
                    <Typography variant="h2" fontWeight={700} align="left">P<span style={{color: grey[700]}}>eek</span></Typography>
                    <Typography variant="h6" fontWeight={400} align="left">
                        Review your itinerary as much or as <em><u>little</u></em> as you desire. Don't forget to invite your travel buddies on board.
                    </Typography>
                </Box>
            </Slide>
        </>
    )

    const slideTwo = (
        <>
            <Fade in={activeStep === 2} timeout={2000}><img src={imageList[2]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom' }} alt={"home"}></img></Fade>
            <Slide direction="down" in={activeStep === 2} timeout={1000} mountOnEnter unmountOnExit>
                <Box sx={{ position: 'absolute', right: '10%', bottom: '10%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'start', maxWidth: '350px' }}>
                    <Typography variant="h2" fontWeight={700} align="left">T<span style={{color: grey[700]}}>ravel</span></Typography>
                    <Typography variant="h6" fontWeight={400} align="left">
                        What are you waiting for, just pack your bags and go!
                    </Typography>
                </Box>
            </Slide>
        </>
    )

    return (
        <>
            {slideZero}
            {slideOne}
            {slideTwo}
        </>
    )
};

export default Display;
