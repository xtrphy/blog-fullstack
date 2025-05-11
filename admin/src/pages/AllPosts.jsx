import React from 'react';
import { useState, useEffect } from 'react';
import styles from './AllPosts.module.css';
import { Link } from 'react-router-dom';

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

    // const deletePost = () => {
    //     fetch(`/api/post/${id}`)
    // };

    if (loading) return <p>Loading...</p>;

    return (
        <main className={styles.mainAdmin}>
            <h1 className={styles.allPostsTitle}>All posts:</h1>
            <div className={styles.posts}>
                {posts.map(post => (
                    <Link key={post.id} to={`/post/${post.id}`} className={styles.post}>{post.title}</Link>
                ))}
            </div>
        </main>
    );
};

export default AllPosts;