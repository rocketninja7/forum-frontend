import React from 'react';
import PostHeader from './PostHeader';
import PostCard from './PostCard';

class AllPosts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        search: "",
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

    updateSearch(s) {
      this.setState({
        search: s
      })
    }
    
    render() {
      return (
        <div>
          <PostHeader updateSearch={s => this.updateSearch(s)} />
          {
            this.state.posts.filter((post) => {
              return post.title.toLowerCase().includes(this.state.search.toLowerCase()) || post.content.toLowerCase().includes(this.state.search.toLowerCase());
            }
            ).map((post) => {
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