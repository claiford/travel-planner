import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function DotsMobileStepper({ activeStep, handleNext, handleBack }) {
	const theme = useTheme();

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
				// backgroundColor: 'transparent',
				position: 'fixed',
				bottom: 0,
				'& .MuiMobileStepper-dots' : {
					width: "100%",
					justifyContent: 'space-around' 
				},
				'& .MuiMobileStepper-dot': {
					width: "15%",
					borderRadius: '10px'
				}
			}}
			nextButton={
				<Button size="small" onClick={handleNext} disabled={activeStep === 2}>
					{theme.direction === 'rtl' ? (
						<KeyboardArrowLeft />
					) : (
						<KeyboardArrowRight />
					)}
				</Button>
			}
			backButton={
				<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
					{theme.direction === 'rtl' ? (
						<KeyboardArrowRight />
					) : (
						<KeyboardArrowLeft />
					)}
				</Button>
			}
		/>
	);
}