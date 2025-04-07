import React, { useState, useEffect } from "react";

const GoogleImageFetcher = ({ formData, onImageSelect }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "AIzaSyDP3L7DJ5PzSROXGqeWmnyUmFcIm-pteTg"; // Your Google API Key
  const CX = "3780ed5117bd0460e"; // Replace with your Custom Search Engine ID

  useEffect(() => {
    if (!formData.gender || !formData.occasion || !formData.season || !formData.bodyType) return;

    const fetchImages = async () => {
      setLoading(true);
      setError("");

      // Build the search query dynamically based on form selection
      const searchQuery = `${formData.gender} ${formData.occasion} outfit for ${formData.season} ${formData.bodyType} body`;

      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
            searchQuery
          )}&cx=${CX}&searchType=image&key=${API_KEY}&num=10`
        );
        const data = await response.json();

        if (data.items) {
          setImages(data.items);
        } else {
          setError("No images found.");
        }
      } catch (err) {
        setError("Failed to fetch images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [formData]); // Runs when formData changes

  return (
    <div>
      {loading && <p>Loading images...</p>}
      {error && <p>{error}</p>}

      <div className="image-results">
        {images.map((image) => (
          <img
            key={image.link}
            src={image.link}
            alt={image.title}
            onClick={() => onImageSelect(image.link)}
            style={{ width: "150px", height: "150px", margin: "5px", cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default GoogleImageFetcher;
