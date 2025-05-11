import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './LogIn.module.css';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('https://blog-fullstack-phc4.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            login(data.token);
            navigate('/');
        } else {
            alert(data.message);
        }
    }

    return (
        <div className={styles.container}>
            <Link className={styles.cancel} to='/'>&times;</Link>
            <div className={styles.authContainer}>
                <h1 className={styles.authTitle}>Welcome Back</h1>
                <form className={styles.authForm} onSubmit={handleSubmit}>
                    <label htmlFor='text'>Username</label>
                    <input type="text" id="text" onChange={e => setUsername(e.target.value)} value={username} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} required />

                    <button type="submit">Log In</button>
                </form>
                <p className={styles.authSwitch}>Don't have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default LogIn;