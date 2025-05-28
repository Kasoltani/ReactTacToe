from flask import Flask, jsonify, request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# test route
@app.route('/')
def hello():
    return 'Hello'

# Get the state of the board held in data.json
@app.route('/getBoard', methods=['GET'])
def get_board_state():
    with open('data.json', 'r') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/setBoard', methods=["POST"])
def set_board_state():
    with open('data.json', 'r') as f:
        data = json.load(f)
    req_info = request.get_json()
    square_id = req_info["squareId"]
    data["board"][square_id] = 'X'
    with open('data.json', 'w') as f:
        json.dump(data, f, indent=4)
    return jsonify(success=True)

@app.route('/resetBoard', methods=['POST'])
def reset_board_state():
    empty_state = { "board" : ([None] * 9) }
    with open('data.json', 'w') as f:
        json.dump(empty_state, f, indent=4)
    return jsonify(success=True)


if __name__ == "__main__":
    app.run(debug=True) 