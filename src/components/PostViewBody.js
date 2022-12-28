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
                    post: res
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
                {
                    this.state.post.comments.map(comment => {
                        return (
                            <Comment key={comment.id} comment={comment} />
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