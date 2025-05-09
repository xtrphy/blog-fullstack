import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faMessage, faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from '../FeaturedPost/FeaturedPost.module.css';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/posts')
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
        <section className={styles.allPosts}>
            <h1 className={styles.allPostsTitle}>All posts</h1>
            {posts.map(post => (
                <div className={styles.post} key={post.id}>

                    <img className={styles.postImage} src={post.imageUrl ? post.imageUrl : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} alt={post.title} />

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

                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postSubtitle}>{post.content.slice(0, 100)}...</p>

                    <div className={styles.postInteractions}>
                        <FontAwesomeIcon icon={faHeart} className={styles.likeBtn} />
                        <FontAwesomeIcon icon={faMessage} className={styles.commentBtn} />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AllPosts;