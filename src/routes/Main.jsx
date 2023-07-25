import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Homepage from './Homepage/components/Homepage'
import Dashboard from './Dashboard/components/Dashboard';
import Login from './Login/components/Login';

const Main = () => {
    return ( 
        <main>
            <Box sx={{ height: 'calc(100vh - 68.5px)' }}>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </Box>
        </main>
    )
};

export default Main;