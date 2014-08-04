from flask import Flask, request
from models.history import *

app = Flask(__name__)

@app.route('/history', methods=['POST'])
def saveHistory():
	history = History()
	history.open()

	history.save(request.data)

	history.close()
  
	return "success"

if __name__ == '__main__':
	app.run(host="127.0.0.1", port=5000, debug=True)

