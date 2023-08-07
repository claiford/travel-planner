import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './routes/Navbar';
import Main from './routes/Main';

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Navbar></Navbar>
			<Main></Main>
		</div>
	);
}

export default App;
