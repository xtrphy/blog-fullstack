import React from 'react';
import { useState } from 'react';

const PostPage = () => {
    const [post, setPost] = useState({ comments: [] });

    return (
        <main>
            {post.title}
            {post.content}
        </main>
    );
};

export default PostPage;