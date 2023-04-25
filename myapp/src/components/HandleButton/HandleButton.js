import React from 'react';
import s from './HandleButton.module.css';

const HandleButton = ({ text }) => {
  return <button className={s.btn}>{text}</button>;
};

export default HandleButton;
