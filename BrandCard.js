import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <div className="brand-card">
      <img src={brand.logo} alt={brand.name} className="brand-logo" />
      <h3>{brand.name}</h3>
      <p className="brand-tagline">{brand.tagline}</p>
      <div className="brand-meta">
        <span className="brand-rating">{brand.rating} ★</span>
        <span> • {brand.category}</span>
      </div>
      <Link to={`/brand/${brand.id}`}>
        <button>View Products</button>
      </Link>
    </div>
  );
};

export default BrandCard;
