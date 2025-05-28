import { useState, useEffect } from 'react'
import './Board.css'
import * as api from './api.js'

function Board(){
    const [board, updateBoard] = useState(new Array(9).fill(null));
    
    useEffect(() => {
        api.getBoardState().then(response => updateBoard(response.board));
    }, []);

    function handleClick(squareId){
        console.log(`clicking square with index ${squareId}`);
        const data = {'squareId': squareId}
        api.setBoardState(data)
            .then(() => api.getBoardState())
            .then((response) => updateBoard(response.board))
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