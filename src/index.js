import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AllPosts from './components/AllPosts';
import NewPostForm from './components/NewPostForm';
import PostView from './components/PostView'

class Bar extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllPosts />}/>
      <Route path='/newpost/' element={<NewPostForm />} />
      <Route path='/post/:id/' element={<PostView />} />
    </Routes>
  </BrowserRouter>  
);
