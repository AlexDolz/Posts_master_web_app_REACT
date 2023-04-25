import React from 'react';
import s from './CommentsContainer.module.css';
import Comment from '../Comment/Comment';

const CommentsContainer = ({ comments }) => {
  return (
    <ul className={s.comments__container}>
      {comments.map((elem, index) => (
        <Comment key={index} text={elem} />
      ))}
    </ul>
  );
};

export default CommentsContainer;
