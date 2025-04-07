import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import StyleQuiz from "./StyleQuiz.js";
import TrendPrediction from "./TrendPrediction.js";
import StyleTracker from "./StyleTracker.js";
import "./StyleEvolutionTracker.css";

const StyleEvolutionTracker = () => {
  const [activeSection, setActiveSection] = useState("quiz");
  const [showEmail, setShowEmail] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const auth = getAuth(); // Get Firebase Auth instance
    if (auth.currentUser) {
      setUserEmail(auth.currentUser.email); // Get logged-in user's email
    }
  }, []);

  return (
    <div className="styleEvolutionTracker-container">
      {/* Sidebar */}
      <aside className="styleEvolutionTracker-sidebar">
        <h2 onClick={() => setShowEmail(!showEmail)} style={{ cursor: "pointer" }}>
          👤 User Dashboard
        </h2>
        {showEmail && userEmail && <p className="user-email">{userEmail}</p>} {/* Show email only if logged in */}

        <nav>
          <ul>
            <li 
              className={activeSection === "quiz" ? "active" : ""} 
              onClick={() => setActiveSection("quiz")}
            >
              📝 Style Quiz
            </li>
            <li 
              className={activeSection === "timeline" ? "active" : ""} 
              onClick={() => setActiveSection("timeline")}
            >
              📅 Style Timeline
            </li>
            <li 
              className={activeSection === "prediction" ? "active" : ""} 
              onClick={() => setActiveSection("prediction")}
            >
              🔮 Predict Next Trend
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="styleEvolutionTracker-content">
        <h1>Welcome to Your Style Evolution</h1>
        <div className="styleEvolutionTracker-grid">
          {activeSection === "quiz" && <StyleQuiz />}
          {activeSection === "timeline" && <StyleTracker />}
          {activeSection === "prediction" && <TrendPrediction />}
        </div>
      </main>
    </div>
  );
};

export default StyleEvolutionTracker;
