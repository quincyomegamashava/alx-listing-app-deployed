import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

// Define TypeScript interface for Property
interface Property {
  id: string;
  title: string;
  imageUrl: string;
}

// Main Home Component
export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch properties on mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<Property[]>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
        );
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading properties...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta
          name="description"
          content="Find your favorite place to stay with ALX Listings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Filter Buttons */}
      <FilterSection />

      {/* Property Listings */}
      <ListingsSection
        properties={properties}
        error={error}
        loading={loading}
      />

      {/* Show More Button */}
      <ShowMoreButton />

    </>
  );
}


// ─── Hero Section ───────────────────────────────────────────────────────────

import SearchBar from "../components/common/SearchBar";

function HeroSection() {
  return (
    <section className="relative w-full h-[520px] sm:h-[600px]">
      <Image
        src="/assets/Hero section imge.png"
        alt="Scenic view of beautiful destinations"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 leading-tight">
          Find your favorite place here!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl px-4">
          The best prices for over 2 million properties worldwide
        </p>
        <div className="mt-6 w-full max-w-3xl">
          <div className="bg-white/95 rounded-full px-3 py-2 shadow-lg">
            <SearchBar />
          </div>
        </div>
        <div className="mt-4">
          <Button
            label="Explore Stays"
            onClick={() => window.location.href = '/properties'}
            variant="secondary"
            className="px-6 py-2 text-sm font-semibold bg-white hover:bg-gray-100"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Filter Section ─────────────────────────────────────────────────────────

function FilterSection() {
  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Book Now, Pay Later",
    "Self Check-in",
    "Instant Book",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
        Filter by Experience
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            aria-label={`Filter by ${filter}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── Listings Section ───────────────────────────────────────────────────────

interface ListingsSectionProps {
  properties: Property[];
  error: string | null;
  loading: boolean;
}

function ListingsSection({ properties, error, loading }: ListingsSectionProps) {
  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-red-500 font-medium">{error}</p>
      </section>
    );
  }

  if (properties.length === 0 && !loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-gray-500">No properties found.</p>
      </section>
    );
  }

  return (
    <section id="listings" className="max-w-7xl mx-auto px-4 py-6 pb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Popular Stays
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/property/${property.id}`}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <Card
              title={property.title}
              image={property.imageUrl}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Show More Button ───────────────────────────────────────────────────────

function ShowMoreButton() {
  return (
    <div className="flex justify-center mb-16">
      <Button
        label="Show more listings"
        onClick={() => alert("Loading more listings...")}
        variant="secondary"
        className="px-6 py-3 text-sm font-medium"
      />
    </div>
  );
}

