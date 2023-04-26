import React, { useContext } from 'react';
import s from './AddCommentForm.module.css';
import HandleButton from '../HandleButton/HandleButton';
import { CommentContext } from '../../context/CommentContext';

const AddCommentForm = ({ id }) => {
  const commentContext = useContext(CommentContext);

  const onSubmit = event => {
    event.preventDefault();
    const newComment = event.target.text.value;
    commentContext.callback(id, newComment);
    event.target.reset();
  };

  return (
    <form className={s.add__comment__form} onSubmit={onSubmit}>
      <input type='text' name='text' placeholder='Your comment' />
      <HandleButton text='Add comment' />
    </form>
  );
};

export default AddCommentForm;
