// src/components/ui/button.js
import React from 'react';

export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};