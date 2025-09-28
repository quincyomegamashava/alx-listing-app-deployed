// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from "next";

interface Property {
  id: string;
  title: string;
  imageUrl: string;
  location?: string;
  price?: number;
  rating?: number;
  isSuperhost?: boolean;
  lat?: number;
  lng?: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q = "", maxPrice, minRating, superhost } = req.query as {
    q?: string;
    maxPrice?: string;
    minRating?: string;
    superhost?: string;
  };
  const qLower = (q || "").toLowerCase();
  const max = maxPrice ? Number(maxPrice) : undefined;
  const min = minRating ? Number(minRating) : undefined;
  const onlySuperhost = superhost === "true";

  const all: Property[] = [
    { id: "1", title: "Cozy Beach Villa", imageUrl: "/assets/Logos.png", location: "Bali, Indonesia", price: 250, rating: 4.82, isSuperhost: true, lat: -8.4095, lng: 115.1889 },
    { id: "2", title: "Modern Apartment in City Center", imageUrl: "/assets/Logos.png", location: "New York, USA", price: 320, rating: 4.67, isSuperhost: false, lat: 40.7128, lng: -74.0060 },
    { id: "3", title: "Luxury Mountain Lodge", imageUrl: "/assets/Logos.png", location: "Aspen, USA", price: 450, rating: 4.93, isSuperhost: true, lat: 39.1911, lng: -106.8175 },
  ];

  let filtered = all.filter((p) =>
    !qLower || p.title.toLowerCase().includes(qLower) || (p.location || "").toLowerCase().includes(qLower)
  );
  if (typeof max === 'number' && !Number.isNaN(max)) {
    filtered = filtered.filter((p) => (p.price ?? Infinity) <= max);
  }
  if (typeof min === 'number' && !Number.isNaN(min)) {
    filtered = filtered.filter((p) => (p.rating ?? 0) >= min);
  }
  if (onlySuperhost) {
    filtered = filtered.filter((p) => p.isSuperhost);
  }

  res.status(200).json(filtered);
}
