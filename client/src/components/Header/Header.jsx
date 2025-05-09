import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { AuthContext } from '../../context/AuthContext.jsx';

const Header = () => {
    const { loggedIn, setLoggedIn } = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    }

    return (
        <header>
            <a href='/' className={styles.logo}>XTRPHY</a>
            <div className={styles.absolute}>
                <nav className={styles.links}>
                    <a href="/">Home</a>
                    <a href="/posts">Posts</a>
                    <a href="/about">About me</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
            {loggedIn ? (
                <Link className={styles.logoutLink} onClick={logout}>Log Out</Link>
            ) : (
                <Link to='login' className={styles.logInBtn}>Log In</Link>
            )}
        </header>
    );
};

export default Header;