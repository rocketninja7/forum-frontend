import React from 'react';
import NewPostButton from './NewPostButton';
import SearchBar from './SearchBar';

function PostHeader(props) {
  return (
    <div style={{display: 'flex', width: '100%'}}>
      <SearchBar updateSearch={props.updateSearch} />
      <NewPostButton />
    </div>
  );
}

export default PostHeader;