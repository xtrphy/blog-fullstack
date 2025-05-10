import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar, faMessage, faHeart } from '@fortawesome/free-regular-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './PostPage.module.css';

const PostPage = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetch(`/post/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading post', err);
                setLoading(false);
            })
    }, [id])

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.post} key={post.id}>

                    <img className={styles.postImage} src={post.imageUrl ? post.imageUrl : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} alt={post.title} />

                    <div className={styles.postInfo}>

                        <div className={styles.calendarSVG}>
                            <FontAwesomeIcon icon={faCalendar} style={{ color: "#74C0FC", }} /> {new Date(post.createdAt).toLocaleDateString('en-US', {
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
                    <p className={styles.postSubtitle}>{post.content}</p>

                    <div className={styles.postInteractions}>
                        <FontAwesomeIcon icon={faHeart} className={styles.likeBtn} />
                        <FontAwesomeIcon icon={faMessage} className={styles.commentBtn} />
                    </div>

                    <div className={styles.tags}>
                        {post.tags.map((tag, index) => (
                            <span className={styles.tag} key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PostPage;