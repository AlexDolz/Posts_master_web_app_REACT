import React from 'react';
import s from './PostContainer.module.css';
import Post from '../Post/Post';

const PostContainer = ({ posts }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <ul className={s.post__list}>
          {posts.map((elem, index) => (
            <Post key={index} {...elem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostContainer;
