import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/components/Homepage'
import Login from './Login/components/Login';

const Main = () => {
    return ( 
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                {/* <Route path="/about" element={<About/>} /> */}
                <Route path="/login" element={<Login/>} />
            </Routes>
        </main>
    )
};

export default Main;