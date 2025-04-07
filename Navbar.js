import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, totalPrice } = useCart();

  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="animated-title">Ethical Brand Finder</h1>
        <p>Find sustainable, cruelty-free, and ethical brands that match your values</p>
      </div>
      <div className="cart-section">
        <div className="cart-icon" onClick={toggleCart}>
          <FaShoppingCart />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="cart-drawer">
          <h3>Shopping Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                  </div>
                </div>
              ))}
              <hr />
              <div className="cart-total">Total: ₹{totalPrice}</div>
              <Link to="/checkout" className="checkout-btn" onClick={() => setCartOpen(false)}>
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
