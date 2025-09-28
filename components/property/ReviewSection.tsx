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
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({ author: "", rating: 5, comment: "" });

  const load = async () => {
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

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyId]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`/api/properties/${propertyId}/reviews`, form);
      setForm({ author: "", rating: 5, comment: "" });
      await load();
    } catch (err) {
      console.error("Failed to submit review", err);
      alert("Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Guest Reviews</h3>

      <form onSubmit={onSubmit} className="mb-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Your name"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            required
          />
          <select
            className="border rounded-lg px-3 py-2"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
          >
            {[5,4,3,2,1].map((r) => (
              <option key={r} value={r}>{r} stars</option>
            ))}
          </select>
          <input
            className="border rounded-lg px-3 py-2 sm:col-span-1"
            placeholder="Your comment"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            required
          />
        </div>
        <button disabled={submitting} className="mt-3 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm">
          {submitting ? 'Submitting…' : 'Add review'}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to leave one!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">{review.author}</span>
                <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-1">{new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
