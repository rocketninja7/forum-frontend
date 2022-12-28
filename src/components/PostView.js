import React from 'react';
import { useParams } from 'react-router-dom';
import PostViewBody from './PostViewBody';

function PostView(props) {
    const params = useParams();
    return (
        <div>
            <PostViewBody params={params}/>
        </div>
    );
}

export default PostView;