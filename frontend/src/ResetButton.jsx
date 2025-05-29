import './ResetButton.css'
import * as api from './api.js'

function ResetButton({ updateBoard }){
    function resetClick(){
        api.resetBoard()
            .then(() => api.getBoardState())
            .then(response => updateBoard(response.board));
    }
    
    return (
        <>
            <div className="button-container">
                <button className="button" onClick={() => resetClick()}> RESET </button>
            </div>
        </>
    )
}

export default ResetButton;