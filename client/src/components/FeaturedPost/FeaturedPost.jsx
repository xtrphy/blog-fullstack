import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar, faMessage, faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from './FeaturedPost.module.css';

const FeaturedPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://blog-fullstack-phc4.onrender.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading posts', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            {posts.length > 0 && (
                <Link to={`post/${posts[0].id}`} className={styles.post}>

                    <img className={styles.postImage} src={posts[0].imageUrl ? posts[0].imageUrl : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} alt={posts[0].title} />

                    <div className={styles.postInfo}>

                        <div className={styles.calendarSVG}>
                            <FontAwesomeIcon icon={faCalendar} style={{ color: "#74C0FC", }} /> {new Date(posts[0].createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </div>

                        <div className={styles.clockSVG}>
                            <FontAwesomeIcon icon={faClock} style={{ color: "#74C0FC", }} /> 03 min read
                        </div>

                    </div>

                    <h3 className={styles.postTitle}>{posts[0].title}</h3>
                    <p className={styles.postSubtitle}>{posts[0].content.slice(0, 100)}...</p>

                    <div className={styles.postInteractions}>
                        <FontAwesomeIcon icon={faHeart} className={styles.likeBtn} />
                        <FontAwesomeIcon icon={faMessage} className={styles.commentBtn} />
                    </div>
                </Link>
            )}
        </>
    );
};

export default FeaturedPost;