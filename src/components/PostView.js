import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import PostTemplate from './PostTemplate';

class PostViewBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    componentDidMount() {
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
            </div>
            :
            <div></div>
        );
    }
}

function PostView(props) {
    const params = useParams();
    return (
        <PostViewBody params={params}/>
    );
}

export default PostView;