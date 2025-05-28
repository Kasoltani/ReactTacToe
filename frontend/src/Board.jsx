import {useState} from 'react'
import './Board.css'

function Board(){
    const [board, updateBoard] = useState(new Array(9).fill(null));
    function handleClick(squareId){
        const newBoard = [...board];
        console.log(`clicking square with index ${squareId}`);
        newBoard[squareId] = 'X'
        updateBoard(newBoard);
    }
    
    return (
        <>
            <div className="board">
                <div className="row">
                    <div className="square" onClick={() => handleClick(0)}>{board[0]}</div>
                    <div className="square" onClick={() => handleClick(1)}>{board[1]}</div>
                    <div className="square" onClick={() => handleClick(2)}>{board[2]}</div>
                </div>
                <div className="row">
                    <div className="square" onClick={() => handleClick(3)}>{board[3]}</div>
                    <div className="square" onClick={() => handleClick(4)}>{board[4]}</div>
                    <div className="square" onClick={() => handleClick(5)}>{board[5]}</div>
                </div>
                <div className="row">
                    <div className="square" onClick={() => handleClick(6)}>{board[6]}</div>
                    <div className="square" onClick={() => handleClick(7)}>{board[7]}</div>
                    <div className="square" onClick={() => handleClick(8)}>{board[8]}</div>
                </div>
            </div>
        </>
    )
}

export default Board;