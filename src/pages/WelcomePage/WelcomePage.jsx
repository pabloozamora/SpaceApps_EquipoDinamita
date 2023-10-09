import React from 'react';
import styles from './WelcomePage.module.css';
import solarImg from '../../assets/solar2.png';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className={styles.welcomePage}>
        <nav className={styles.topBar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/page1">Page 1</Link>
                </li>
                <li>
                    <Link to="/page2">Page 2</Link>
                </li>
            </ul>
        </nav>
      <div className={styles.welcomeBanner}>
          <header className={styles.titleContainer}>
            <h1>Eclipses</h1>
            <h2>Perspective is everything</h2>
          </header>
          <img src={solarImg} className={styles.solarImage} />

      </div>
    </div>
  );
}

export default WelcomePage;
