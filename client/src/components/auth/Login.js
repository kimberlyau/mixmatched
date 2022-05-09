import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Home } from '@mui/icons-material';

import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const { login, error, clearErrors, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        email: 'email',
        password: 'password',
    });

    // Check to see if authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin');
        }

        if (error === 'Invalid login credentials') {
            // TODO: Alert
        }
    });

    const { email, password } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert('Please fill in all fields');
        } else {
            login({
                email,
                password,
            });
        }
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div id='navbar'>
                <Button
                    color='primary'
                    startIcon={<Home />}
                    size='large'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/';
                    }}
                >
                    Home
                </Button>
            </div>
            <div
                style={{
                    width: '60%',
                }}
            >
                <div>
                    <h1>Admin Login</h1>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlform='email'>Email Address</label>
                            <input
                                type='email'
                                name='email'
                                value={email}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlform='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={password}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <input type='submit' value='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
