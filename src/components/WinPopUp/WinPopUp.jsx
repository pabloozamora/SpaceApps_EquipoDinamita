import React from 'react';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import styles from './WinPopUp.module.css';
import { useNavigate } from 'react-router-dom';

function WinPopUp({
    close, isOpen, callback,
  }) {
    const navigate = useNavigate();
    return(
        isOpen && (
            <PopUp close={close} maxWidth={370} callback={callback} closeWithBackground={false}>
            <h2 className={styles.title}>You reached the Moon!</h2>
            <p onClick={() => navigate('/')} className={styles.text}>Go back to the main page</p>
        </PopUp>
        )
    )
}

WinPopUp.propTypes = {
    close: PropTypes.func.isRequired,
    callback: PropTypes.func,
    isOpen: PropTypes.bool.isRequired,
}

export default WinPopUp;