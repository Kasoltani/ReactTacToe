export function getBoardState(){
    return fetch('http://127.0.0.1:5000/getBoard', {
        method: "GET"
    })
        .then(response => response.json());
}

export function setBoardState(data){
    return fetch('http://127.0.0.1:5000/setBoard', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
}

export function resetBoard(){
    return fetch("http://127.0.0.1:5000/resetBoard", {
        method: "POST"
    });
}
