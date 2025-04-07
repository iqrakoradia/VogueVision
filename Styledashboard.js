import React from "react";
import { Link } from "react-router-dom";
import "./styleDashboard.css";

const StyleDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Style Evolution Dashboard</h1>
      <div className="dashboard-sections">
        <Link to="/style-quiz" className="dashboard-card">
          <h2>📝 Take Style Quiz</h2>
          <p>Discover your fashion preferences.</p>
        </Link>
        <Link to="/style-timeline" className="dashboard-card">
          <h2>📅 Style Evolution Timeline</h2>
          <p>See how your fashion choices change over time.</p>
        </Link>
        <Link to="/trend-prediction" className="dashboard-card">
          <h2>🔮 Predict Next Trend</h2>
          <p>Get AI-powered style suggestions.</p>
        </Link>
      </div>
    </div>
  );
};

export default StyleDashboard;
