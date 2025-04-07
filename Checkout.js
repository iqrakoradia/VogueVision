import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  // Form state for user details
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);  // For loading state during submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);  // Start loading during email submission

    // Prepare email parameters using template variables defined in EmailJS
    const templateParams = {
      from_name: formData.name,
      to_email: formData.email,
      address: formData.address,
      pincode: formData.pincode,
      phone: formData.phone,
      order_details: cartItems.map(item => `${item.name} (${item.selectedSize}) - ₹${item.price}`).join(", "), // Added size info
      total_price: totalPrice,
    };

    // Send email via EmailJS. Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual values.
    emailjs.send("service_fdtnw2x", "template_s6mqxpe", templateParams, "XGXTvNK6ISb3_XNuf")
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        
        // Clear the cart after successful order submission
        clearCart();

        // Display success message to the user
        toast.success("Order given successfully! An email confirmation has been sent.", {
          autoClose: 3000,
          hideProgressBar: true,
        });

        // After a delay, navigate back to the Ethical Brand Finder page
        setTimeout(() => {
          navigate("/ethical-brand-finder");
        }, 3000);
      }, (err) => {
        console.error("Failed to send email. Error: ", err);
        setIsSubmitting(false);  // Reset loading if error occurs
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="checkout-container">
      {/* Left Side: User Details Form */}
      <div className="checkout-form">
        <h2>Billing Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Pincode:
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="proceed-btn" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>
      </div>

      {/* Right Side: Cart Summary */}
      <div className="checkout-cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.selectedSize}</p> {/* Display selected size */}
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
            <hr />
            <h3>Total: ₹{totalPrice}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
