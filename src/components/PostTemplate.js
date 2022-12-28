import React from "react";
import moment from 'moment';

function PostTemplate(props) {
    return (
    <div>
        <div className='title'>
        {props.post.title}
        </div>
        <div className='poster'>
        by {props.post.poster.username} at {moment(props.post.time_created).format("hh:mm:ssa DD/MM/YYYY")}
        </div>
        <div className='content'>
        {props.post.content}
        </div>
    </div>
    );
}

export default PostTemplate;