import React from 'react';
import s from './AddPostForm.module.css';
import HandleButton from '../HandleButton/HandleButton';

const AddPostForm = ({ addPost }) => {
  const onSubmit = event => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: event.target.title.value,
      description: event.target.text.value,
      isLiked: false,
      comments: [],
    };
    addPost(newPost);
    event.target.reset();
  };

  return (
    <div className={s.wrapper}>
      <form className={s.inner} onSubmit={onSubmit}>
        <input name='title' type='text' placeholder='Title' />
        <input name='text' type='text' placeholder='Text' />
        <HandleButton text='Public' />
      </form>
    </div>
  );
};

export default AddPostForm;
