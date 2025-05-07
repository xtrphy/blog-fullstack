import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import styles from './Header.module.css';

const Header = () => {
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
            <a href="/profile" className={styles.profileLink}><FontAwesomeIcon icon={faUser} /></a>
        </header>
    );
};

export default Header;