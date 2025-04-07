from flask import Flask, request, send_file
import torch
import cv2
import numpy as np
from PIL import Image
import os

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
RESULTS_FOLDER = "results"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RESULTS_FOLDER, exist_ok=True)

# Load AI Model (e.g., CP-VTON, OpenPose)
try_on_model = torch.hub.load("facebookresearch/deepfashion2", "CP-VTON")

def process_virtual_try_on(user_image_path, cloth_image_path):
    user_image = Image.open(user_image_path)
    cloth_image = Image.open(cloth_image_path)

    # Apply AI Model
    result_image = try_on_model(user_image, cloth_image)

    result_path = os.path.join(RESULTS_FOLDER, "final_tryon.png")
    result_image.save(result_path)
    return result_path

@app.route("/upload", methods=["POST"])
def upload_images():
    if "user_image" not in request.files or "cloth_image" not in request.files:
        return {"error": "Upload both images"}, 400

    user_file = request.files["user_image"]
    cloth_file = request.files["cloth_image"]

    user_image_path = os.path.join(UPLOAD_FOLDER, "user.png")
    cloth_image_path = os.path.join(UPLOAD_FOLDER, "cloth.png")

    user_file.save(user_image_path)
    cloth_file.save(cloth_image_path)

    # Process the virtual try-on
    result_path = process_virtual_try_on(user_image_path, cloth_image_path)

    return send_file(result_path, mimetype="image/png")

if __name__ == "__main__":
    app.run(debug=True)
