import React from 'react'
import Films from './pages/Films'
import styles from './styleSheet/first.module.css';
import './styleSheet/film.module.css'

export default function Display({data}) {
  return (
    <div>
      <div className={styles.display}>
        <Films data={data}/>
    </div>
    </div>
  )
}
