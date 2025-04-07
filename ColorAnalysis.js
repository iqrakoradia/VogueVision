import React, { useState, useEffect } from "react";

const ColorAnalysis = ({ likedProducts, stylingData }) => {
  const [colorPalette, setColorPalette] = useState([]);

  useEffect(() => {
    const extractColorPalette = () => {
      const colors = [];
      likedProducts.forEach((productId) => {
        const product = stylingData.find((item) => item.id === productId);
        if (product && product.dominantColors) {
          colors.push(...product.dominantColors);
        }
      });
      setColorPalette(colors);
    };

    extractColorPalette();
  }, [likedProducts, stylingData]);

  return (
    <div className="color-analysis">
      <h2>Your Color Palette</h2>
      <div className="color-palette">
        {colorPalette.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: `rgb(${color.join(",")})` }}
          />
        ))}
      </div>
      <p>Based on your liked outfits, we recommend wearing these colors!</p>
    </div>
  );
};

export default ColorAnalysis;