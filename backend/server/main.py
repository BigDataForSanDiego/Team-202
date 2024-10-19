from flask import Flask, request, jsonify
from flask_cors import CORS
from predict_word.py import get_word

app = Flask(__name__)
cors = CORS(app, origins='*')

the_word = None


@app.route("/api/text", methods=['GET'])
def text():
    return the_word


@app.route("/api/upload", methods=['POST'])
def upload():
    if 'file' not in request.files:
        return "No file part in the request", 400  # Return an error if no file is included

    file = request.files['file']
    if file.filename == '':
        return "No selected file", 400  # Return an error if no file is selected

    # Process the file
    # word = get_word(file)
    global the_word
    the_word = get_word(file)
    return the_word


if __name__ == "__main__":
    app.run(debug=True, port=8080)
