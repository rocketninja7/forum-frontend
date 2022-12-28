import React from 'react';
import PostHeader from './PostHeader';
import PostCard from './PostCard';

class AllPosts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
      }
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/")
        .then(res => res.json())
        .then(
          res => {
            this.setState({
              posts: res
            });
          }
        )
      return;
    }
    
    render() {
      return (
        <div>
          <PostHeader />
          {
            this.state.posts.map((post) => {
              return (
                <PostCard key={post.id} post={post}>
                </PostCard>
              );
            })
          }
        </div>
      );
    }
  }

  export default AllPosts;