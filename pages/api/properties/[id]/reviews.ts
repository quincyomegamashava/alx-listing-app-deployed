import type { NextApiRequest, NextApiResponse } from "next";

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const REVIEWS: Record<string, Review[]> = {
  "1": [
    { id: "r1", author: "Alice", rating: 5, comment: "Amazing stay!", createdAt: new Date().toISOString() },
    { id: "r2", author: "Bob", rating: 4, comment: "Great location.", createdAt: new Date().toISOString() },
  ],
  "2": [
    { id: "r3", author: "Charlie", rating: 4, comment: "Very clean and modern.", createdAt: new Date().toISOString() },
  ],
  "3": [],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const key = Array.isArray(id) ? id[0] : id;
  if (!key) return res.status(400).json({ message: "Missing property id" });

  if (req.method === 'GET') {
    const reviews = REVIEWS[key] || [];
    return res.status(200).json(reviews);
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const newReview: Review = {
      id: Math.random().toString(36).slice(2),
      author: String(body.author || 'Guest'),
      rating: Math.max(1, Math.min(5, Number(body.rating) || 5)),
      comment: String(body.comment || ''),
      createdAt: new Date().toISOString(),
    };
    if (!REVIEWS[key]) REVIEWS[key] = [];
    REVIEWS[key].unshift(newReview);
    return res.status(201).json(newReview);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
