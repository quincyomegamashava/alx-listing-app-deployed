// pages/property/[id].tsx
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "../../components/property/PropertyDetail";
// import PropertyDetail from "@/components/property/PropertyDetail";
// 


interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // wait for router to load id

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p className="text-center py-6">Loading property details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-6">{error}</p>;
  }

  if (!property) {
    return <p className="text-center py-6">Property not found.</p>;
  }

  return <PropertyDetail property={property} />;
}
