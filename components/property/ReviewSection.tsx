import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string | number;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const ReviewSection = ({ propertyId }: { propertyId: string | number }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError(null);
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet. Be the first to leave one!</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Guest Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{review.author}</span>
              <span className="text-yellow-500">
                {"⭐".repeat(review.rating)}
              </span>
            </div>
            <p className="text-gray-700 mt-2">{review.comment}</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
