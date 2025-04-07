import React, { useState, useRef, useEffect } from 'react';

const ImageStatic = () => {
  const [imageList, setImageList] = useState([]); // List of uploaded images
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const canvasRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageList((prevList) => [...prevList, reader.result]); // Add image to the list
        setCurrentIndex((prevList) => prevList.length); // Update the current index
      };
      reader.readAsDataURL(file);
    }
  };

  // Render image with overlay on canvas
  const renderImageWithOverlay = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const baseImage = new Image();
    baseImage.src = imageList[currentIndex];

    baseImage.onload = () => {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the base image
      context.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

      // Load and draw overlay
      const overlay = new Image();
      overlay.src = 'makeup.png'; // Replace with the path to your overlay asset
      overlay.onload = () => {
        // Adjust position and size as needed
        context.drawImage(overlay, 50, 50, 200, 200);
      };
    };
  };

  // Handle swipe actions
  const handleSwipe = (direction) => {
    if (imageList.length > 0) {
      if (direction === 'left') {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
      } else if (direction === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
      }
    }
  };

  // Re-render the canvas whenever the current image changes
  useEffect(() => {
    if (imageList.length > 0) {
      renderImageWithOverlay();
    }
  }, [currentIndex, imageList]);

  return (
    <div className="image-static-container">
      <h2>Static Image Overlay</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageList.length > 0 && (
        <div className="canvas-container">
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            style={{ border: '1px solid #000', margin: '20px 0' }}
          />
          <div className="swipe-controls">
            <button onClick={() => handleSwipe('left')}>← Previous</button>
            <button onClick={() => handleSwipe('right')}>Next →</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageStatic;
