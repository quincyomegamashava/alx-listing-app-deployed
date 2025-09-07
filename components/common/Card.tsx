import React from 'react';
import { CardProps } from '../../interfaces'; // or wherever your interfaces live

const Card: React.FC<CardProps> = ({ title, image, location, price, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 overflow-hidden transition-transform duration-300">
      {image && (
        <div className="h-48 sm:h-56 w-full relative">
          <img
            src={image}
            alt={title || "Property"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>}
        {location && <p className="text-sm text-gray-600 mb-2">{location}</p>}
        {price !== undefined && (
          <p className="text-lg font-bold text-gray-900 mb-3">${price.toLocaleString()}/night</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;