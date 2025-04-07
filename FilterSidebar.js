import React from "react";

const FilterSidebar = ({
  certifications,
  selectedCertifications,
  onCertificationChange,
  priceRange,
  onPriceRangeChange,
  productTypes,
  selectedProductTypes,
  onProductTypeChange,
}) => {
  return (
    <aside className="filter-sidebar">
      <h3>Ethical Certifications</h3>
      {certifications.map((cert) => (
        <div key={cert} className="filter-option">
          <input
            type="checkbox"
            id={cert}
            name={cert}
            checked={selectedCertifications.includes(cert)}
            onChange={() => onCertificationChange(cert)}
          />
          <label htmlFor={cert}>{cert}</label>
        </div>
      ))}

      <h3>Price Range</h3>
      <input
        type="range"
        min="0"
        max="10000"
        step="100"
        value={priceRange}
        onChange={(e) => onPriceRangeChange(e.target.value)}
      />
      <div>₹0 - ₹{priceRange}</div>

      <h3>Product Type</h3>
      {productTypes.map((type) => (
        <div key={type} className="filter-option">
          <input
            type="checkbox"
            id={type}
            name={type}
            checked={selectedProductTypes.includes(type)}
            onChange={() => onProductTypeChange(type)}
          />
          <label htmlFor={type}>{type}</label>
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
