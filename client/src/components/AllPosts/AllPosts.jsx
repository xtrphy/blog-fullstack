import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';
import styles from './AllPosts.module.css';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/posts')
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
            <h2 className={styles.allPostsTitle}>All posts</h2>
            <div className={styles.postsGrid}>
                {posts.map(post => (
                    <Link to={`/post/${post.id}`} className={styles.post} key={post.id}>

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

                        <div className={styles.tags}>
                            {post.tags.map((tag, index) => (
                                <span className={styles.tag} key={index}>{tag}</span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default AllPosts;