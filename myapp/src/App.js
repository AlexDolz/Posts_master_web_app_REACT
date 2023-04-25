import React, { useState } from 'react';
import AddPostForm from './components/AddPostForm/AddPostForm';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import { defaultPosts } from './data/data';
import { CommentContext } from './context/CommentContext';

const App = () => {
  let [posts, setPosts] = useState(defaultPosts);

  const addPost = newPost => {
    setPosts([newPost, ...posts]);
  };

  const addComment = (id, newComment) => {
    const tempPosts = [...posts];
    tempPosts.forEach(elem => {
      if (elem.id === id) {
        elem.comments.push(newComment);
      }
    });
    setPosts(tempPosts);
  };

  const changeLike = id => {
    const targetPost = posts.find(elem => elem.id === id);
    targetPost.isLiked = !targetPost.isLiked;
    setPosts([...posts]);
  };

  const removePost = id => {
    const updatedPosts = posts.filter(elem => elem.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <CommentContext.Provider
      value={{ callback: addComment, posts, changeLike, removePost }}
    >
      <div className='app'>
        <div className='container'>
          <AddPostForm addPost={addPost} />
          <PostContainer posts={posts} />
        </div>
      </div>
    </CommentContext.Provider>
  );
};

export default App;
