from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.get("/health")
def health():
    return jsonify(ok=True, service="flask rest api model")

@app.post("/predict")
def predict():
    data = request.get_json(force=True)
    x = data.get("x", 0)
    return jsonify(result=x)
