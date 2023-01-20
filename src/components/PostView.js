import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PostViewBody from './PostViewBody';

function PostView(props) {
    const params = useParams();
    return (
        <div>
            <Helmet>
                {props.helmetStyle}
            </Helmet>
            <PostViewBody params={params}/>
        </div>
    );
}

export default PostView;