import React from "react";
import moment from 'moment';
import ShowComment from "./ShowComment";
import NewComment from "./NewComment";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }

    render() {
        return (
            <div className="comment">
                <div>
                    <div>{this.props.comment.commenter.username}</div>
                    <div>{moment(this.props.comment.time_created).format("hh:mm:ssa DD/MM/YYYY")}</div>
                </div>
                {
                    this.state.isEditing ?
                    <NewComment 
                        setEditing={() => this.setState({
                            isEditing: false,
                        })}
                        post={{
                            id: this.props.comment.post,
                        }}
                        comment={this.props.comment}
                        updateComponent={this.props.updateComponent}
                    />
                    :
                    <ShowComment 
                        setEditing={() => this.setState({
                            isEditing: true,
                        })}
                        comment={this.props.comment}
                        updateComponent={this.props.updateComponent}
                    />
                }
            </div>
        );
    }
}

export default Comment;