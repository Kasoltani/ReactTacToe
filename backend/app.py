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
def get_state():
    with open('data.json', 'r') as f:
        data = json.load(f)
        return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True) 