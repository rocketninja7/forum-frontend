import React from 'react';
import { useNavigate } from "react-router-dom";
import PostTemplate from './PostTemplate';

function PostCard(props) {
  const navigate = useNavigate();
  return (
    <button className='post' onClick={e => navigate('/post/'+props.post.id+'/')}>
      <PostTemplate {...props} />
    </button>
  );
}

  export default PostCard;