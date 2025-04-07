import React from "react";
import "./ImageTryOn.css"; // Import the CSS file

const ImageTryOn = () => {
  return (
    <div className="image-try-on"> {/* Background applied here */}
      <div className="image-try-on-container">
        <h1>Virtual Try-On</h1>
        <p>"Wear It Before You Own It – Virtually!"</p>
        <iframe
          src="https://nymbo-virtual-try-on.hf.space"
          frameBorder="0"
          width="900"
          height="550"
        ></iframe>
      </div>
    </div>
  );
};

export default ImageTryOn;
