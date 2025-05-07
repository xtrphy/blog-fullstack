import React from 'react';
import styles from './Footer.module.css';
import FollowMe from '../followMe/followMe';

const Footer = () => {
    return (
        <footer>
            <a href="https://vk.com/xtrphyo">&#169; 2025 Vlad Perepechkin</a>
            <a href='/' className={styles.logo}>XTRPHY</a>
            <FollowMe />
        </footer>
    );
};

export default Footer;