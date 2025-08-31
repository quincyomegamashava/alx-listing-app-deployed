// components/common/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image, location, price }) => (
  <div className="border rounded-lg shadow-md overflow-hidden w-full max-w-sm hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {location && <p className="text-sm text-gray-600">{location}</p>}
      {price !== undefined && (
        <p className="mt-2 text-indigo-600 font-bold">${price} / night</p>
      )}
    </div>
  </div>
);

export default Card;
