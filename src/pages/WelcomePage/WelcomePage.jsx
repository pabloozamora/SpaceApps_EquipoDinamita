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
                    <Link to="/animation">Funny animation</Link>
                </li>
                <li>
                    <Link to="/solarEclipses">Types of Solar Eclipses</Link>
                </li>
                <li>
                    <a href="/Heavenly_trinity.pdf">Short Story</a>
                </li>
                <li>
                    <Link to="/maze">Eclipse Facts Maze</Link>
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
