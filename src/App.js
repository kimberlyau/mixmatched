import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
