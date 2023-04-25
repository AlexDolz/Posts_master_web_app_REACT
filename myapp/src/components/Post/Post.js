import React, { useContext } from 'react';
import s from './Post.module.css';
import CommentsContainer from '../CommentsContainer/CommentsContainer';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
import { CommentContext } from '../../context/CommentContext';

const Post = ({ id, title, description, comments, isLiked }) => {
  const { changeLike, removePost } = useContext(CommentContext);
  const like = isLiked ? 'Liked' : 'Like?';

  const likeStyles = {
    background: isLiked ? 'teal' : 'azure',
    color: isLiked ? 'white' : 'black',
  };

  return (
    <li className={s.post__item}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.post__description}>{description}</p>
      <div className={s.underline}></div>
      <div
        onClick={() => changeLike(id)}
        style={likeStyles}
        className={s.like__item}
      >
        {like}
      </div>
      <div onClick={() => removePost(id)} className={s.remove__mark}>
        X
      </div>
      <CommentsContainer comments={comments} />
      <AddCommentForm id={id} />
    </li>
  );
};

export default Post;
