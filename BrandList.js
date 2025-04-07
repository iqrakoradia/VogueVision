import React from "react";
import BrandCard from "./BrandCard";

const BrandList = ({ brands }) => {
  return (
    <div className="brand-list">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
};

export default BrandList;
