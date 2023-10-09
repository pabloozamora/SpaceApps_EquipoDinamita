import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import styles from './Player.module.css';
import playerImg from '../../assets/player.png'

function Player( { handleKeyPressed, position, currentSprite, }) {
    const autoFocus = useCallback((el) => (el ? el.focus() : null), []);
    return(
        <div
          className={`${styles.player} ${currentSprite}`}
          style={{ gridArea: `${position.row}/${position.column}` }}
          tabIndex={0}
          onKeyDown={handleKeyPressed}
          ref={autoFocus}
        >
            <img src={playerImg} />
        </div>
    )
    
}

export default Player;