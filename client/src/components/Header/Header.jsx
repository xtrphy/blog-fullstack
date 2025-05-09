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
            <Link to='/' className={styles.logo}>XTRPHY</Link>
            <div className={styles.absolute}>
                <nav className={styles.links}>
                    <Link to='/'>Home</Link>
                    <Link to='/posts'>Posts</Link>
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