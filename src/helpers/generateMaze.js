function generateMaze(rows, cols) {
  // Create a grid filled with walls
  const maze = Array.from({ length: rows }, () =>
    Array(cols).fill('#')
  );

  // Define starting position
  const startRow = 1;
  const startCol = 1;

  // Recursive function to create a random path
  function createPath(row, col) {
    const directions = [
      [-2, 0],
      [2, 0],
      [0, -2],
      [0, 2],
    ];

    directions.sort(() => Math.random() - 0.5);

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 1 &&
        newRow < rows - 1 &&
        newCol >= 1 &&
        newCol < cols - 1 &&
        maze[newRow][newCol] === '#'
      ) {
        maze[newRow][newCol] = ' ';
        maze[row + dr / 2][col + dc / 2] = ' ';
        createPath(newRow, newCol);
      }
    }
  }

  // Create a path from start to goal
  createPath(startRow, startCol);

  // Calculate the goal position
  const goalRow = rows - 2; // Second-to-last row
  let goalCol;

  // Find the last walkable space in the last row
  for (let i = cols - 2; i >= 1; i -= 2) {
    if (maze[goalRow][i] === ' ') {
      goalCol = i;
      break;
    }
  }

  // Set the goal position
  maze[goalRow][goalCol] = 'g';

  // Place enemies ('m') randomly within walkable paths
  let enemiesPlaced = 0;
  while (enemiesPlaced < 5) {
    const randomRow = Math.floor(Math.random() * (rows - 2)) + 1;
    const randomCol = Math.floor(Math.random() * (cols - 2)) + 1;

    if (maze[randomRow][randomCol] === ' ') {
      maze[randomRow][randomCol] = 'm';
      enemiesPlaced++;
    }
  }

  // Place 'p' at the desired location (for example, at row 1, column 3)
  maze[1][1] = 'p';

  // Convert the maze to the desired format
  const mazeArray = maze.map((row) => row.join('').split(''));

  return mazeArray;
}

// Example usage:
const maze = generateMaze(12, 15);
maze.forEach((row) => console.log(row.join(',')));

export default generateMaze;
