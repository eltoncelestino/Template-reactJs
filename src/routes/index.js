import { BrowserRouter, Routes } from 'react-router-dom';

import Route from './router';

import Login from '../pages/Login';
import Home from '../pages/Home';

export default function () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} isPrivate />
                
            </Routes>
        </BrowserRouter>
    )
};