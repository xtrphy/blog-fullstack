import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import styles from './LogIn.module.css';
import { AuthContext } from '../../context/AuthContext';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        setMessage(data.message);

        if (data.token) {
            localStorage.setItem('token', data.token);
            setLoggedIn(true);
            navigate('/');
        }
    }

    return (
        <div className={styles.authContainer}>
            <h1 className={styles.authTitle}>Welcome Back</h1>
            <form className={styles.authForm} onSubmit={handleSubmit}>
                <label htmlFor='text'>Username</label>
                <input type="text" id="text" onChange={e => setUsername(e.target.value)} value={username} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} required />

                <button type="submit">Log In</button>
                <p>{message}</p>
            </form>
            <p className={styles.authSwitch}>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default LogIn;