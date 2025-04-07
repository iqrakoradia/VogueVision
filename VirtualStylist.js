import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, getDoc, doc, updateDoc, arrayUnion, arrayRemove, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Slider from "react-slick";
import Chatbot from "../components/Chatbot";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./virtualstylist.css";

const API_KEY = "AIzaSyDP3L7DJ5PzSROXGqeWmnyUmFcIm-pteTg";
const CX = "3780ed5117bd0460e";

const VirtualStylist = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    category: "",
    season: "",
    bodyType: "",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredAccessories, setFilteredAccessories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [likedProducts, setLikedProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
  };

  const fetchImages = async (query) => {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${CX}&key=${API_KEY}&searchType=image&num=10`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.items ? data.items.map((item) => ({ imageURL: item.link })) : [];
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.gender || !formData.age || !formData.category || !formData.season || !formData.bodyType) {
      setError("Please fill all the inputs.");
      return;
    }
    setError("");
    setIsLoading(true);
    
    const outfitQuery = `${formData.gender} ${formData.age} ${formData.category} ${formData.season} ${formData.bodyType} fashion outfit best trendy styles site:pinterest.com OR site:instagram.com OR site:zara.com OR site:vogue.com`;

    let accessoryKeywords = "";
    if (formData.category === "casual wear") {
      accessoryKeywords = formData.gender === "male" 
        ? "sneakers sunglasses casual belt" 
        : "tote bag sunglasses simple bracelet";
    } else if (formData.category === "formal wear") {
      accessoryKeywords = formData.gender === "male" 
        ? "leather shoes watch tie" 
        : "structured handbag pearl earrings";
    } else if (formData.category === "party wear") {
      accessoryKeywords = formData.gender === "male" 
        ? "dress shoes statement ring" 
        : "clutch bold necklace high heels";
    } else if (formData.category === "sportswear") {
      accessoryKeywords = formData.gender === "male" 
        ? "sports shoes sweatband cap" 
        : "sports shoes fitness tracker";
    } else if (formData.category === "ethnic wear") {
      accessoryKeywords = formData.gender === "male" 
        ? "mojaris embroidered belt" 
        : "ethnic earrings potli bag";
    } else {
      accessoryKeywords = "fashion accessories";
    }
        const accessoryQuery = `${formData.gender} ${formData.age} ${formData.category} ${formData.season} stylish fashion accessories ${accessoryKeywords}`;
    
    const [outfits, accessories] = await Promise.all([
      fetchImages(outfitQuery),
      fetchImages(accessoryQuery)
    ]);
    
    setFilteredProducts(outfits);
    setFilteredAccessories(accessories);
    setIsLoading(false);
  };

  const handleLike = async (imageURL) => {
    if (!user) {
      setError("You must be logged in to like products.");
      return;
    }
    try {
      const userRef = doc(db, "outfits", user.uid);
      await setDoc(
        userRef,
        {
          userId: user.uid,
          userEmail: user.email,
          likedImages: arrayUnion({
            imageURL,
            timestamp: new Date().toISOString(),
            selectedOptions: {
              gender: formData.gender,
              age: formData.age,
              category: formData.category,
              season: formData.season,
              bodyType: formData.bodyType,
            },
          }),
        },
        { merge: true }
      );
    
      setLikedProducts((prevLikes) => [...prevLikes, imageURL]);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
    
  };

  return (
    <div className="virtual-stylist-container">
           <div className="chatbot-icon" onClick={handleChatbotToggle} style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999, cursor: "pointer", fontSize: "2rem" }}>
        👕
      </div>
      {showChatbot && (
        <div className="chatbot-container" style={{ position: "fixed", bottom: "80px", right: "20px", zIndex: 10000, background: "white", padding: "10px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <button className="close-chatbot" onClick={handleChatbotToggle} style={{ position: "absolute", top: "5px", right: "5px", border: "none", background: "none", fontSize: "1.2rem", cursor: "pointer" }}>✖</button>
          <iframe src="https://www.yeschat.ai/i/gpts-2OTogohtBY-Personal-Stylist" width="400" height="400" style={{ maxWidth: "100%" }}></iframe>
        </div>
      )}
      <form className="stylist-form" onSubmit={handleFormSubmit}>
        <h2>Tell Us About You!</h2>
        <label>Gender:
          <select name="gender" value={formData.gender} onChange={handleFormChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>Age:
          <select name="age" value={formData.age} onChange={handleFormChange}>
            <option value="">Select Age</option>
            <option value="teen">Teen</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
        </label>
        <label>Category:
          <select name="category" value={formData.category} onChange={handleFormChange}>
            <option value="">Select Category</option>
            <option value="casual wear">Casual Wear</option>
            <option value="formal wear">Formal Wear</option>
            <option value="street style">Street Style</option>
            <option value="party wear">Party Wear</option>
            <option value="sportswear">Sportswear</option>
            <option value="ethnic wear">Ethnic Wear</option>
          </select>
        </label>
        <label>Season:<select name="season" value={formData.season} onChange={handleFormChange}><option value="">Select Season</option><option value="summer">Summer</option><option value="winter">Winter</option><option value="spring">Spring</option></select></label>
        <label>Body Type:<select name="bodyType" value={formData.bodyType} onChange={handleFormChange}><option value="">Select Body Type</option><option value="hourglass">Hourglass</option><option value="Fit">Athletic</option><option value="plus-size">Plus-size</option><option value="skinny">Skinny</option></select></label>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <h2 className="section-title">Outfits</h2>
      <div className="image-grid large-instagram-style">
        {filteredProducts.map((item, index) => (
          <div key={index} className="image-card">
            <img src={item.imageURL} alt="Outfit" className="styled-image large-image" />
            <button className="like-button" onClick={() => handleLike(item.imageURL)}>
              {likedProducts.includes(item.imageURL) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>

      <h2 className="section-title">Accessories</h2>
      <div className="image-grid large-instagram-style">
        {filteredAccessories.map((item, index) => (
          <div key={index} className="image-card">
            <img src={item.imageURL} alt="Accessory" className="styled-image large-image" />
            <button className="like-button" onClick={() => handleLike(item.imageURL)}>
              {likedProducts.includes(item.imageURL) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualStylist;

