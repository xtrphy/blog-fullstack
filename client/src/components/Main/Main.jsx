import React from 'react';
import FollowMe from '../followMe/followMe';
import Posts from '../Posts/Posts';
import styles from './Main.module.css';

const Main = () => {

    return (
        <main>
            <section className={styles.aboutMe}>
                <div className={styles.imgContainer}>
                    <img className={styles.avatar} src="/avatar.png" alt="Xtrphy avatar" />
                </div>
                <h1 className={styles.fullName}>Vlad Perepechkin</h1>
                <p className={styles.info}>I am a fullstack developer passionate about creating modern and user-friendly interfaces. <br /> In my blog I share my experience, life hacks and my experiments with code.</p>
                <FollowMe />
            </section>

            <section className={styles.featuredPost}>
                <Posts />
            </section>
        </main>
    );
};

export default Main;