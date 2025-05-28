export function getBoardState(){
    fetch('http://127.0.0.1:5000', {
        method: "GET"
    })
        .then(response => response.json())
}