import React from 'react';
import s from './Comment.module.css';

const Comment = ({ text }) => {
  return (
    <div className={s.comment}>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
