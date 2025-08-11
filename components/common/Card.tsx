// components/common/Card.tsx
import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, image }) => (
  <div className="border rounded-lg shadow-md overflow-hidden w-full max-w-sm">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  </div>
)

export default Card
