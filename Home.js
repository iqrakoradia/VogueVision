import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Home.css"; // Import the homepage-specific styles

const Home = () => {
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setShowLoginModal(true);
      }
    });
    return () => unsubscribe();
  }, []);

  // Logout handler
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully!");
        setUser(null);
        setShowLoginModal(true); // Show the modal again after logout
      })
      .catch((error) => console.error("Error during logout:", error));
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">Voguevision</h1>
        <nav>
          <ul className="nav-links">
            {user ? (
              <li
                className="user-dropdown"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <FaUserCircle className="user-icon" />
                <span>{user.email}</span>
                {dropdownVisible && (
                  <div className="dropdown-menu">
                    <button className="logout-option" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <div className="hero">
        <h2 className="hero-text">Welcome to Voguevision</h2>
        <p className="sub-text">Where Fashion Meets Innovation</p>
        <button className="cta-button">
          <Link to="/explore">Explore Now</Link>
        </button>
      </div>

      {/* Login/Signup Modal */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Please Log In or Sign Up</h3>
            <p>You need to be logged in to access this page.</p>
            <div className="modal-buttons">
              <Link to="/login" className="modal-link">
                Login
              </Link>
              <Link to="/signup" className="modal-link">
                Sign Up
              </Link>
            </div>
            <button className="close-modal" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
