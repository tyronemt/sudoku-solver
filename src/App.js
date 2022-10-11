import './App.css';
import { useState } from 'react';

const initial = [
    [-1, 5, -1, 9, -1, -1, -1, -1, -1],
    [8, -1, -1, -1, 4, -1, 3, -1, 7],
    [-1, -1, -1, 2, 8, -1, 1, 9, -1],
    [5, 3, 8, 6, -1, 7, 9, 4, -1],
    [-1, 2, -1, 3, -1, 1, -1, -1, -1],
    [1, -1, 9, 8, -1, 4, 6, 2, 3],
    [9, -1, 7, 4, -1, -1, -1, -1, -1],
    [-1, 4, 5, -1, -1, -1, 2, -1, 9],
    [-1, -1, -1, -1, 3, -1, -1, 7, -1]
]

const ans = [
  [4, 5, 1, 9, 7, 3, 8, 6, 2],
  [8, 9, 2, 1, 4, 6, 3, 5, 7],
  [7, 6, 3, 2, 8, 5, 1, 9, 4],
  [5, 3, 8, 6, 2, 7, 9, 4, 1],
  [6, 2, 4, 3, 9, 1, 7, 8, 5],
  [1, 7, 9, 8, 5, 4, 6, 2, 3],
  [9, 8, 7, 4, 1, 2, 5, 3, 6],
  [3, 4, 5, 7, 6, 8, 2, 1, 9],
  [2, 1, 6, 5, 3, 9, 4, 7, 8]
]

function App() {
  const [sudokuArr, setSudokuArr] = useState(initial);

  function getDeepCopy(arr){
    return JSON.parse(JSON.stringify(arr));
  }
  
  const handleSolveButton = () => {
    setSudokuArr(ans)
  }

  const handleResetButton = () => {
    setSudokuArr(initial)
  }

  // const handleCheckButton = () => {

  // }

  function onInputChange(e, row, col){
    var val = parseInt(e.target.value) || -1, grid = getDeepCopy(sudokuArr);
    if (val === -1 || (val >=1 && val<=9)){
      grid[row][col] = val;
    }
    setSudokuArr(grid);
  }

  return (
    <div className='App'> 
      <div className='App-header'>
        <h3>Sudoku Solver</h3>
        <table> 
          <tbody> 
            {
              [0,1,2,3,4,5,6,7,8].map((row,rowIndex) => {
                return <tr key= {rowIndex} className = "bBorder">
                    {[0,1,2,3,4,5,6,7,8].map((col,colIndex) => {
                      return <td key ={rowIndex + colIndex}>
                        <input onChange = {(e) => onInputChange(e, row, col)} value = {sudokuArr[row][col] === -1 ? '' : sudokuArr[row][col]} 
                        className='cellInput'
                        disabled={initial[row][col] !== -1}></input>
                      </td>
                    })}
                </tr>
              })
            }
            
          </tbody>
        </table>
        <div className='buttonContainer'>
          {/* <button className='checkButton' onClick={handleCheckButton}> Check</button> */}
          <button className='solveButton' onClick={handleSolveButton}> Solve</button>
          <button className='resetButton' onClick={handleResetButton}> Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
