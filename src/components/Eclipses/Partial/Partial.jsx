import React from 'react'
import styles from './Partial.module.css'

function Partial({ selected }) {
  return (
    <div className={`${styles.partialEclipse} ${selected ? styles.animate : ''}`}>
      <div className={styles.sun}>
        <div className={`${styles.moon} ${selected ? styles.animate : ''}`} />
      </div>
    </div>
  )
}

export default Partial