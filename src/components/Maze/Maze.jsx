import React, { useState, useEffect } from "react";
import styles from './Maze.module.css';
import generateMaze from "../../helpers/generateMaze";
import PropTypes from 'prop-types';
import Player from '../Player/Player';
import Floor from '../../assets/floor.png'
import Wall from '../../assets/wall.png'
import Info from '../../assets/info.gif'
import Goal from '../../assets/goal.png'
import usePopUp from "../../hooks/usePopUp";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import WinPopUp from "../WinPopUp/WinPopUp";
import getFacts from "../../helpers/getFacts";

function Maze({ width, height }) {
    const [maze, setMaze] = useState([]);
    const availableSpaces = ['2,2'];
    const infoSpaces = [];
    const facts = getFacts();
    let currentFact = 0;
    const showFacts = {};
    let winSpace = '';
    const [position, setPosition] = useState({ row: 2, column: 2 });
    const [playerSprite, setPlayerSprite] = useState(styles.front);
    const [ isWinOpen, openWin, closeWin ] = usePopUp();
    const [ isInfoOpen, openInfo, closeInfo ] = usePopUp();
    
    const handleKeyPressed = (e) => {
    if (!isWinOpen && e.key === 'ArrowDown') {
      setPlayerSprite(styles.front)
      if (availableSpaces.includes(`${position.row + 1},${position.column}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, row: lastPosition.row + 1 }))
      }
    } else if (!isWinOpen && e.key === 'ArrowUp') {
      setPlayerSprite('back')
      if (availableSpaces.includes(`${position.row - 1},${position.column}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, row: lastPosition.row - 1 }))
      }
    } else if (!isWinOpen && e.key === 'ArrowRight') {
      setPlayerSprite(styles.right)
      if (availableSpaces.includes(`${position.row},${position.column + 1}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, column: lastPosition.column + 1 }))
      }
    } else if (!isWinOpen && e.key === 'ArrowLeft') {
      setPlayerSprite(styles.left)
      if (availableSpaces.includes(`${position.row},${position.column - 1}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, column: lastPosition.column - 1 }))
      }
    }
  }

  if (infoSpaces.length > 0) {
    setFacts(infoSpaces);
  }

  useEffect(() => {
    if (`${position.row},${position.column}` === winSpace) {
      openWin();
    }
  }, [position]);

  useEffect(() => {
    if (infoSpaces.includes(`${position.row},${position.column}`)) {
      openInfo();
    }
  }, [position]);

  useEffect(() => {
    const newMaze = generateMaze(width, height);
    setMaze(newMaze);
  }, []);

    return(
        <div className={styles.mazeContainer}>
            <div className={styles.maze} style={
            {
                gridTemplateColumns: `repeat(${height}, 50px)`,
                gridTemplateRows: `repeat(${width}, 50px)`,
              }
            }>{maze?.map((row, indexRow) => row.map((col, indexCol) => {
                const key = `${indexRow + 1},${indexCol + 1}`
                switch(col) {
                    case ' ':
                        availableSpaces.push(`${indexRow + 1},${indexCol + 1}`)
                        return(
                        <div className={styles.floor}>
                            <img src={Floor} />
                        </div>)
                    case '#':
                        return(<div className={styles.wall}>
                            <img src={Wall} />
                        </div>)
                    case 'm':
                        availableSpaces.push(`${indexRow + 1},${indexCol + 1}`)
                        infoSpaces.push(`${indexRow + 1},${indexCol + 1}`)
                        showFacts[`${indexRow + 1},${indexCol + 1}`] = facts[currentFact]
                        currentFact++
                        return(
                        <div className={styles.info}>
                            <img src={Info} />
                        </div>)
                    case 'p':
                        return(
                            <React.Fragment key={key}>
                                <Player
                                key="player"
                                handleKeyPressed={handleKeyPressed}
                                position={position}
                                currentSprite={playerSprite}
                                />
                                <div className={styles.floor}>
                                    <img src={Floor} />
                                </div>
                            </React.Fragment>)
                    case 'g':
                        winSpace = `${indexRow + 1},${indexCol + 1}`
                        availableSpaces.push(`${indexRow + 1},${indexCol + 1}`)
                        return(<div className={styles.info}>
                            <img src={Goal} />
                        </div>)
                }
            }))}
            </div>
            <InfoPopUp
              close={closeInfo}
              isOpen={isInfoOpen}
              text={showFacts[`${position.row},${position.column}`]}
            />
            <WinPopUp
              close={closeWin}
              isOpen={isWinOpen}
            />
        </div>
    )
};

Maze.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Maze;