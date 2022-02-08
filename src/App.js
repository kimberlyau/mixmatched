import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Artist from './components/pages/Artist';
import Result from './components/pages/Result';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/artist' element={<Artist />} />
                    <Route exact path='/result' element={<Result />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
