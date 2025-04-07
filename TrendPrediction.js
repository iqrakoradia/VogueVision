import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import "./TrendPrediction.css";

const API_KEY = "AIzaSyDP3L7DJ5PzSROXGqeWmnyUmFcIm-pteTg";
const CX = "3780ed5117bd0460e";

const TrendPrediction = () => {
  const [likedStyles, setLikedStyles] = useState([]);
  const [predictedTrend, setPredictedTrend] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trendImages, setTrendImages] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        fetchLikedStyles(authUser.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchLikedStyles = (userId) => {
    if (!userId) return;
    const userRef = doc(db, "outfits", userId);
    
    onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data().likedImages || [];
        setLikedStyles(data);
        analyzeTrends(data);
      }
      setLoading(false);
    });
  };

  const analyzeTrends = (styles) => {
    if (styles.length === 0) return;

    const categoryCount = {};
    styles.forEach((style) => {
      if (style.selectedOptions && style.selectedOptions.category) {
        const category = style.selectedOptions.category;
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      }
    });

    const mostLikedCategory = Object.keys(categoryCount).reduce((a, b) =>
      categoryCount[a] > categoryCount[b] ? a : b
    );

    const nextTrends = {
      "casual": "Streetwear Chic",
      "formal": "Modern Minimalism",
      "bohemian": "Eclectic Fusion",
      "sporty": "Athleisure Vibes",
      "vintage": "Retro Revival",
      "street style": "Urban Edge"
    };

    const trend = nextTrends[mostLikedCategory] || "Experimental Fashion";
    setPredictedTrend(trend);
    fetchTrendImages(trend);
  };

  const fetchTrendImages = async (trend) => {
    if (!trend) return;
    setImageLoading(true);

    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=${trend} fashion&cx=${CX}&key=${API_KEY}&searchType=image&num=6`
      );
      const data = await response.json();
      const images = data.items ? data.items.map(item => item.link) : [];
      setTrendImages(images);
    } catch (error) {
      console.error("Error fetching trend images:", error);
    }

    setImageLoading(false);
  };

  return (
    <div className="trend-container">
      <h2 className="trend-title">Your Next Fashion Trend</h2>
      {loading ? <p>Loading...</p> : (
        predictedTrend ? (
          <>
            <div className="trend-box">
              <h3>{predictedTrend}</h3>
              <p>Based on your style history, this is your next fashion trend!</p>
            </div>

            {/* Trend Image Grid */}
            <h3 className="trend-subtitle">Explore {predictedTrend} Looks</h3>
            {imageLoading ? <p>Fetching fashion images...</p> : (
              <div className="trend-grid">
                {trendImages.map((img, index) => (
                  <img key={index} src={img} alt={predictedTrend} className="trend-img" />
                ))}
              </div>
            )}
          </>
        ) : (
          <p>No enough data yet to predict a trend.</p>
        )
      )}
    </div>
  );
};

export default TrendPrediction;
