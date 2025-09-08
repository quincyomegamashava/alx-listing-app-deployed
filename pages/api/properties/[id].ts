// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";

const mockProperties = [
  {
    id: "1",
    title: "Cozy Mountain Cabin",
    description: "A warm and cozy cabin in the mountains.",
    location: "Denver, CO",
    price: 120,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: "2",
    title: "Modern Downtown Loft",
    description: "Stay in the heart of the city.",
    location: "Austin, TX",
    price: 150,
    imageUrl: "https://placehold.co/600x400",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  res.status(200).json(property);
}
