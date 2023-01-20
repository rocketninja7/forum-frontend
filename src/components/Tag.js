import React from 'react';

function Tag(props) {
    return (
        <div className='tag' style={{backgroundColor: props.color}}>
            {props.name}
        </div>
    )
}

export default Tag;