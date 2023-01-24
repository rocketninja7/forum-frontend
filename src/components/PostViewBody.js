import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
import PostTemplate from './PostTemplate';

class PostViewBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    updateComponent() {
        fetch("http://localhost:8080/post/"+this.props.params.id+"/")
        .then(res => res.json())
        .then(
            res => {
                console.log(res);
                this.setState({
                    post: res,
                });
            }
        )
    }

    componentDidMount() {
        this.updateComponent();
        return;
    }

    render() {
        return (
            this.state.post ? 
            <div className='post'>
                <PostTemplate {...this.state} />
                <button onClick={() => {
                    this.props.navigate("/editpost/"+this.state.post.id+"/")
                }}>
                    Edit Post
                </button>
                <button onClick={() => { 
                    fetch("http://localhost:8080/post/"+this.state.post.id+"/", {
                        method: 'DELETE',
                    })
                    .then(res => console.log(res))
                    .then(_ => this.props.navigate("/"))
                    .catch(err => console.log(err));
                }}>
                    Delete Post
                </button>
                {
                    this.state.post.comments.map(comment => {
                        return (
                            <Comment key={comment.id} comment={comment} updateComponent={() => this.updateComponent()} />
                        );
                    })
                }
                <NewComment {...this.state} updateComponent={() => this.updateComponent()} />
            </div>
            :
            <div></div>
        );
    }
}

export default PostViewBody;