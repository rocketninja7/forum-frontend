import React from 'react';
import NewPostButton from './NewPostButton';

function PostHeader(props) {
  return (
    <div>
      <input></input>
      <button>Search</button>
      <NewPostButton />
    </div>
  );
}

export default PostHeader;