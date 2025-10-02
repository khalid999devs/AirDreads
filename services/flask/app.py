from flask import Flask, jsonify, request
app = Flask(__name__)

@app.get("/health")
def health():
    return jsonify(ok=True, service="flask")

@app.post("/predict")
def predict():
    data = request.get_json(force=True)
    x = data.get("x", 0)
    return jsonify(result=x)
