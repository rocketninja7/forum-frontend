import React from "react";
import moment from 'moment';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div>{this.props.comment.commenter.username}</div>
                <div>{moment(this.props.comment.time_created).format("hh:mm:ssa DD/MM/YYYY")}</div>
                <div>{this.props.comment.content}</div>
            </div>
        );
    }
}

export default Comment;