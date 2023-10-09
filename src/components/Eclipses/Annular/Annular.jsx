import React, { useState } from 'react'
import styles from './Annular.module.css'

function Annular({ selected }) {
  return (
    <div className={`${styles.annularEclipse} ${selected ? styles.animate : ''}`}>
      <div className={styles.sun}>
        <div className={`${styles.moon} ${selected ? styles.animate : ''}`} />
      </div>
    </div>
  )
}

export default Annular
