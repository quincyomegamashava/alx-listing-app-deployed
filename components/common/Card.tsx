import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, location, price, rating, isSuperhost, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 overflow-hidden transition-transform duration-300">
      {image && (
        <div className="h-48 sm:h-56 w-full relative">
          <Image
            src={image}
            alt={title || 'Property'}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
          {(isSuperhost || typeof rating === 'number') && (
            <div className="absolute inset-0 p-3 flex justify-between pointer-events-none">
              {isSuperhost && (
                <span className="bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">Superhost</span>
              )}
              {typeof rating === 'number' && (
                <span className="ml-auto bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-600" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  {rating.toFixed(2)}
                </span>
              )}
            </div>
          )}
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
