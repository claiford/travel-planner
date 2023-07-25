import { useState } from 'react';
import { Box } from '@mui/material';
import Stepper from './Stepper'

const images = require.context('../images')
const imageList = images.keys().map(image => images(image));


const Homepage = () => {
    const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

    return (
        <div>
            <Box sx={{
                height: 'calc(100vh - 68.5px)',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <img src={imageList[activeStep]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={"home"}></img>
                <Stepper activeStep={activeStep} handleNext={handleNext} handleBack={handleBack}></Stepper>
            </Box>
        </div>
    )
};

export default Homepage;