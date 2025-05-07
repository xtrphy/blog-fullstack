import React from 'react';

import { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            <h2>Featured Post</h2>
            {posts[0] && (
                <div className="post">
                    <h3>{posts[0].title}</h3>
                    <p>{posts[0].content}</p>
                </div>
            )}
        </>
    );
};

export default Posts;