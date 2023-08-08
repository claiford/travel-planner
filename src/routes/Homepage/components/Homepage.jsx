import { useState } from 'react';
import { Box } from '@mui/material';
import Stepper from './Stepper'
import Display from './Display';

const Homepage = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        (activeStep === 2) ? setActiveStep(0) : setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Display activeStep={activeStep} />
            <Stepper activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
        </Box>
    )
};

export default Homepage;