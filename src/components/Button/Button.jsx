import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx'; 

export const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={clsx(styles.button, className)} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};
