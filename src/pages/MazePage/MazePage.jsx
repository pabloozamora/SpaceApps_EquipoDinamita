import React from "react";
import styles from './MazePage.module.css';
import getMaze from "../../helpers/generateMaze";
import Maze from "../../components/Maze/Maze";

function MazePage() {
    return(
        <div className={styles.mazePage}>
            <div className={styles.mazeContainer}>
                <Maze width={13} height={15} />
            </div>
        </div>
    )
}

export default MazePage;