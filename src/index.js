import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AllPosts from './components/AllPosts';
import NewPost from './components/NewPost';
import PostView from './components/PostView';

const root = ReactDOM.createRoot(document.getElementById('root'));
var helmetStyle = (
  <style>
    {'body { background-color: #abcdef; margin: 30px; }'}
  </style>
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllPosts helmetStyle={helmetStyle} />}/>
      <Route path='/newpost/' element={<NewPost helmetStyle={helmetStyle} />} />
      <Route path='/post/:id/' element={<PostView helmetStyle={helmetStyle} />} />
      <Route path='/editpost/:id/' element={<NewPost helmetStyle={helmetStyle} />} />
    </Routes>
  </BrowserRouter>  
);
