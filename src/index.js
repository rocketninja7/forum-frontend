import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AllPosts from './components/AllPosts';
import NewPostForm from './components/NewPostForm';
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
      <Route path='/newpost/' element={<NewPostForm helmetStyle={helmetStyle} />} />
      <Route path='/post/:id/' element={<PostView helmetStyle={helmetStyle} />} />
    </Routes>
  </BrowserRouter>  
);
