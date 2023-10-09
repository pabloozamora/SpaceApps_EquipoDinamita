import React from 'react';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import styles from './InfoPopUp.module.css';

function InfoPopUp({
    close, isOpen, text, callback,
  }) {
    return(
        isOpen && (
            <PopUp close={close} maxWidth={370} callback={callback}>
            <h2 className={styles.title}>Fun Fact</h2>
            <p className={styles.text}>{text}</p>
            <p className={styles.source}>Source: https://science.nasa.gov/eclipses/</p>
        </PopUp>
        )
    )
}

InfoPopUp.propTypes = {
    close: PropTypes.func.isRequired,
    callback: PropTypes.func,
    text: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

export default InfoPopUp;