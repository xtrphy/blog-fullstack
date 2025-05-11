import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <header>
            <Link to='/' className={styles.logo}>XTRPHY</Link>
            <div className={styles.absolute}>
                <nav className={styles.links}>
                    <Link to='/'>Home</Link>
                    <Link to='/posts'>Posts</Link>
                </nav>
            </div>
            {isAuthenticated ? (
                <Link className={styles.logoutLink} onClick={logout}>Log Out</Link>
            ) : (
                <Link to='/login' className={styles.logInBtn}>Log In</Link>
            )}
        </header>
    );
};

export default Header;