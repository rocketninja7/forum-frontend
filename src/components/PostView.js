import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PostViewBody from './PostViewBody';

function PostView(props) {
    const params = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <Helmet>
                {props.helmetStyle}
            </Helmet>
            <PostViewBody params={params} navigate={navigate}/>
        </div>
    );
}

export default PostView;