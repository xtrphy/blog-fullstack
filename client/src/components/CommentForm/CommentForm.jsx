import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ postId, onCommentAdded }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`https://blog-fullstack-phc4.onrender.com/post/${postId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ content }),
            });

            if (response.ok) {
                const newComment = await response.json();

                setContent('');

                onCommentAdded(newComment);
            } else {
                console.error('Error adding comment', await response.text());
            }
        } catch (err) {
            console.error('Error adding comment', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.commentForm}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Write a comment...'
                className={styles.commentField}
                rows={3}
                required
            />
            <button
                type='submit'
                className={styles.sendCommentBtn}>
                Send
            </button>
        </form>
    );
};

export default CommentForm;