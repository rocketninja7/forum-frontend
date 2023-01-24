import React from "react";
import moment from 'moment';
import Tag from "./Tag";

var colors = [
    "#ffb3ba",
    "#ffdfba",
    "#ffffba",
    "#baffc9",
    "#bae1ff",
]

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
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {props.post.tags.map((tag, idx) => <Tag key={tag.id} name={tag.name} color={colors[idx%colors.length]} />)}
        </div>
    </div>
    );
}

export default PostTemplate;