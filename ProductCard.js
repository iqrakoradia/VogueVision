import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size

  if (!addToCart) {
    console.error("Cart context is not available");
    return null; // Prevents rendering if context is missing
  }

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      toast.error("Please select a size!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }

    addToCart({ ...product, selectedSize });
    toast.success(`${product.name} added to cart!`, {
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <p>{product.stockCount} in stock</p>

      {/* Size selection */}
      {product.sizes.length > 0 && (
        <div className="size-selection">
          <label htmlFor="size">Select Size:</label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Choose Size</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
