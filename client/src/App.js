import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Artist from './components/pages/Artist';
import Result from './components/pages/Result';
import EventEdit from './components/pages/Admin_Event';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/admin' element={<Admin />} />
                    <Route exact path='/artist' element={<Artist />} />
                    <Route exact path='/result' element={<Result />} />
                    <Route exact path='/edit' element={<EventEdit />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
