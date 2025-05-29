import './App.css'
import Board from './Board.jsx'
import ResetButton from './ResetButton.jsx'
import { useState, useEffect } from 'react'
import * as api from './api.js'


function App() {
  const [board, updateBoard] = useState(new Array(9).fill(null));
    
  useEffect(() => {
      api.getBoardState().then(response => updateBoard(response.board));
  }, []);

  return (
    <>
      <Board board={board} updateBoard={updateBoard} />
      <ResetButton updateBoard={updateBoard} />
    </>
  )
}

export default App;
