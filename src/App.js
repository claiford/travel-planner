import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './routes/Navbar';
import Main from './routes/Main';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Quicksand',
    ].join(','),
  },});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<CssBaseline />
				<Navbar></Navbar>
				<Main></Main>
			</div>
		</ThemeProvider>
	);
}

export default App;
