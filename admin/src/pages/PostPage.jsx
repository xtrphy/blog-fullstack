import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PostPage.module.css';

const PostPage = () => {
    const [post, setPost] = useState({ comments: [] });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/post/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading posts', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;

    return (
        <main className={styles.main}>
            <Link className={styles.cancelBtn} to='/'>&times;</Link>
            <div className={styles.post} key={id}>

                <img className={styles.postImage} src={post.imageUrl ? post.imageUrl : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} alt={post.title} />

                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postSubtitle}>{post.content}</p>

                <div className={styles.commentsContainer}>
                    {post.comments.map((comment) => (
                        <div className={styles.comment} key={comment.id}>
                            <img className={styles.userLogo} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
                            <p>{comment.user.username}: {comment.content}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.tags}>
                    {post.tags.map((tag, index) => (
                        <span className={styles.tag} key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PostPage;