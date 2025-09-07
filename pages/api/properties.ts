// pages/api/properties.ts
import type { NextApiRequest, NextApiResponse } from "next";

interface Property {
  id: string;
  title: string;
  imageUrl: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Example mock data (replace later with DB fetch)
  const properties: Property[] = [
    {
      id: "1",
      title: "Cozy Beach Villa",
      imageUrl: "/assets/villa.jpg",
    },
    {
      id: "2",
      title: "Modern Apartment in City Center",
      imageUrl: "/assets/apartment.jpg",
    },
    {
      id: "3",
      title: "Luxury Mountain Lodge",
      imageUrl: "/assets/lodge.jpg",
    },
  ];

  res.status(200).json(properties);
}
