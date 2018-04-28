from flask import Flask

app = Flask(__name__)

@app.route('/<commandString>')
def parser(commandString):
    string = 'This command string was passed: ' + str(commandString)
    return string


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

