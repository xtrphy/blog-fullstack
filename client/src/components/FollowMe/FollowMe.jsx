import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './FollowMe.module.css';

const FollowMe = () => {
    return (
        <div className={styles.socialMedia}>
            <div>Follow me</div>
            <div className={styles.socialMediaContainer}>
                <a href="https://vk.com/xtrphyo"><FontAwesomeIcon icon={faVk} /></a>
                <a href="https://www.youtube.com/@xtrphy"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://github.com/xtrphy"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    );
};

export default FollowMe;