import React from 'react'
import styles from './Total.module.css'

function Total({ selected }) {
  return (
    <div className={`${styles.totalEclipse} ${selected ? styles.animate : ''}`}>
        <div className={styles.sun}>
          <div className={`${styles.moon} ${selected ? styles.animate : ''}`} />
        </div>
    </div>
  )
}

export default Total