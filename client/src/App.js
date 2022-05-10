import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Artist from './components/pages/Artist';
import ArtistDB from './components/pages/ArtistDB';
import Result from './components/pages/Result';
import EventEdit from './components/pages/Admin_Event';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';

import MusicEventState from './context/musicEvent/MusicEventState';
import MusicArtistState from './context/musicArtist/MusicArtistState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return (
        <AuthState>
            <MusicEventState>
                <MusicArtistState>
                    <Router>
                        <div className='App'>
                            <Routes>
                                <Route exact path='/' element={<Home />} />
                                <Route
                                    exact
                                    path='/admin'
                                    element={
                                        <PrivateRoute>
                                            <Admin />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    exact
                                    path='/artistDB'
                                    element={
                                        <PrivateRoute>
                                            <ArtistDB />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    exact
                                    path='/artist'
                                    element={<Artist />}
                                />
                                <Route
                                    exact
                                    path='/result'
                                    element={<Result />}
                                />
                                <Route
                                    exact
                                    path='/edit'
                                    element={<EventEdit />}
                                />
                                <Route
                                    exact
                                    path='/login'
                                    element={<Login />}
                                />
                            </Routes>
                        </div>
                    </Router>
                </MusicArtistState>
            </MusicEventState>
        </AuthState>
    );
};

export default App;
