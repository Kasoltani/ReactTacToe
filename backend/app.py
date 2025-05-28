from flask import Flask, jsonify, request
import json

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello'

@app.route('/setGameState', methods=['POST'])
def set_game_state():
    print("test")

if __name__ == "__main__":
    app.run(debug=True) 