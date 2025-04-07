import React, { useState } from "react";
import axios from "axios";

const TryOn = () => {
  const [userImage, setUserImage] = useState(null);
  const [clothImage, setClothImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event, setImage) => {
    setImage(event.target.files[0]);
  };

  const uploadImages = async () => {
    if (!userImage || !clothImage) {
      alert("Please upload both images!");
      return;
    }

    setLoading(true);

    let formData = new FormData();
    formData.append("user_image", userImage);
    formData.append("cloth_image", clothImage);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/Nymbo/virtual-try-on",
        formData,
        {
          headers: {
            Authorization: `Bearer YOUR_HUGGING_FACE_API_KEY`,
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      setResultImage(URL.createObjectURL(response.data));
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to process try-on. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>👕 Virtual Try-On</h1>
      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setUserImage)} />
      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setClothImage)} />
      <button onClick={uploadImages} disabled={loading}>
        {loading ? "Processing..." : "Try On"}
      </button>
      {resultImage && <img src={resultImage} alt="Virtual Try-On Result" />}
    </div>
  );
};

export default TryOn;
