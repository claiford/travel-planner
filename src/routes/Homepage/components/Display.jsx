import { Fade } from "@mui/material";

const images = require.context('../images')
console.log(images);
const imageList = images.keys().map(image => images(image));

const Display = ({ activeStep }) => {

    const slideZero = (
        <Fade in={activeStep === 0} timeout={2000}><img src={imageList[0]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} alt={"home"}></img></Fade>
    )

    const slideOne = (
        <Fade in={activeStep === 1} timeout={2000}><img src={imageList[1]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} alt={"home"}></img></Fade>
    )

    const slideTwo = (
        <Fade in={activeStep === 2} timeout={2000}><img src={imageList[2]} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} alt={"home"}></img></Fade>
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
