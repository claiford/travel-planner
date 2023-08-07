import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from '@mui/material';

export default function DotsMobileStepper({ activeStep, handleNext, handleBack }) {
	const theme = useTheme();

	useEffect(() => {
		const timer = setInterval(() => {
			handleNext();
		}, 5000)

		return (() => {
			clearInterval(timer);
		})
	}, [activeStep])


	return (
		<MobileStepper
			variant="dots"
			steps={3}
			position="static"
			activeStep={activeStep}
			sx={{
				width: '80%',
				minWidth: '250px',
				flexGrow: 1,
				maxWidth: '900px',
				borderRadius: '10px 10px 0 0',
				backgroundColor: grey[800],
				position: 'fixed',
				bottom: 0,
				'& .MuiMobileStepper-dots': {
					width: "100%",
					justifyContent: 'space-around'
				},
				'& .MuiMobileStepper-dot': {
					width: "15%",
					borderRadius: '10px',
				},
				'& .MuiMobileStepper-dotActive': {
					backgroundColor: grey[300]
				}
			}}
			backButton={
				<IconButton onClick={handleBack} disabled={activeStep === 0} sx={{ color: grey[300] }}>
					<KeyboardArrowLeft />
				</IconButton>
			}
			nextButton={
				<IconButton onClick={handleNext} disabled={activeStep === 2} sx={{ color: grey[300] }}>
					<KeyboardArrowRight />
				</IconButton>
			}
		/>
	);
}