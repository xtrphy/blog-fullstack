import React from 'react';
import FollowMe from '../followMe/followMe';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
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

            <section className={styles.featuredPostSection}>
                <h2 className={styles.featuredPost}>Featured post</h2>
                <FeaturedPost />
            </section>

            <section className={styles.subscribeSection}>
                <h2 className={styles.subscribeTitle}>Subscribe to new posts</h2>
                <p className={styles.subscribeSubtitle}>Stay informed when the newest and most relevant posts are published!</p>
                <div className={styles.inputBox}>
                    <input className={styles.subscribeInput} type="email" placeholder='Enter your email' />
                    <button className={styles.subscribeBtn}>Subscribe</button>
                </div>
            </section>
        </main>
    );
};

export default Main;