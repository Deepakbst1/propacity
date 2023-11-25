import React from 'react';
import styles from './styleSheet/first.module.css';
import Rectangle from '../image/Rectangle6.png';

export default function First() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={Rectangle} alt="Star wars" />
      <p className={styles.heading}>Welcome to Star Wars Dashboard</p>
      <p className={styles.para}>
        Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
      </p>
    </div>
  );
}
