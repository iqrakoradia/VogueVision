from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import numpy as np
import torch
from transformers import CLIPProcessor, CLIPModel
from tensorflow.keras.models import load_model
import os

# Ensure the models directory exists
os.makedirs("backend/models", exist_ok=True)

# Save the trained model
model.save("backend/models/lstm_fashion_model.h5")
print("✅ Model saved at 'backend/models/lstm_fashion_model.h5'")


app = FastAPI()

# Load LSTM model for outfit prediction
lstm_model = load_model("lstm_fashion_model.h5")

# Load OpenAI CLIP model for trend recommendations
clip_model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
clip_processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

class OutfitInput(BaseModel):
    past_outfits: list[str]

@app.post("/predict-outfit")
def predict_outfit(data: OutfitInput):
    try:
        past_outfits = np.array(data.past_outfits).reshape(1, -1, 1)  # Reshape for LSTM
        predicted_outfit = lstm_model.predict(past_outfits)
        return {"predicted_outfit": predicted_outfit.tolist()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

class TrendInput(BaseModel):
    style: str

@app.post("/recommend-trends")
def recommend_trends(data: TrendInput):
    try:
        inputs = clip_processor(text=[f"{data.style} fashion trends"], return_tensors="pt")
        outputs = clip_model(**inputs)
        trend_vector = outputs.logits_per_text.detach().numpy().tolist()
        return {"recommended_trends": trend_vector}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
