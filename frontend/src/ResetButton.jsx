import './ResetButton.css'
import * as api from './api.js'

function ResetButton(){
    return (
        <>
            <div className="button-container">
                <button className="button" onClick={() => api.resetBoard()}> RESET </button>
            </div>
        </>
    )
}

export default ResetButton;