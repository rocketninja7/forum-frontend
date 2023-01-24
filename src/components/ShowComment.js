import React from "react";

function ShowComment(props) {
    return (
        <div>
            <div>{props.comment.content}</div>
            <button onClick={props.setEditing}>
                Edit Comment
            </button>
            <button onClick={() => {
                fetch("https://rocketninja7-forum-backend.onrender.com/comment/"+props.comment.id+"/", {
                    method: 'DELETE',
                })
                .then(res => console.log(res))
                .then(_ => props.updateComponent())
                .catch(err => console.log(err));
            }}>
                Delete Comment
            </button>
        </div>
    );
}

export default ShowComment;