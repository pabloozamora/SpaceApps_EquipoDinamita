import React, { useState } from 'react'
import styles from './SolarEclipses.module.css'
import EclipsesSlider from '../../components/EclipsesSlider/EclipsesSlider'

function SolarEclipses() {
  return (
    <div className={styles.mainContainer}>
      <EclipsesSlider />
    </div>
  )
}

export default SolarEclipses