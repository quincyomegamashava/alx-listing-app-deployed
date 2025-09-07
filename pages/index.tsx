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

      {/* Navigation Header */}
      <NavigationHeader />

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

      {/* Footer */}
      <Footer />
    </>
  );
}

// ─── Navigation Header with Auth & Links ────────────────────────────────────

function NavigationHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-green-600">alx</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/properties"
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Properties
            </Link>
            <Link
              href="/bookings"
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              My Bookings
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-green-600 transition"
            >
              Log in
            </Link>
            <Button
              label="Sign up"
              onClick={() => (window.location.href = "/signup")}
              variant="primary"
              className="text-sm px-4 py-2"
            />
          </div>
        </div>
      </div>

      {/* Mobile Banner (optional) */}
      <div className="bg-green-700 text-white text-xs text-center py-2 sm:hidden">
        Overseas trip? Get the latest travel guides ·{" "}
        <button className="underline hover:text-yellow-200 transition">
          More Info
        </button>
      </div>
    </header>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px]">
      <Image
        src="/assets/Hero section imge.png"
        alt="Scenic view of beautiful destinations"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Find your favorite place here!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl px-4">
          The best prices for over 2 million properties worldwide
        </p>
        <div className="mt-8">
          <Button
            label="Start Exploring"
            onClick={() => document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" })}
            variant="primary"
            className="px-8 py-3 text-lg font-semibold"
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
            href={`/properties/${property.id}`}
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

// ─── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-4">alx</h3>
          <p className="text-gray-300 leading-relaxed max-w-xs">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-4">Explore Popular Destinations</h4>
          <ul className="space-y-2">
            {["Apartments in Dubai", "Hotels in New York", "Villa in Spain", "Mansion in Indonesia"].map(
              (item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {["About us", "Blog", "Careers", "Customers"].map((item, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-4">Help & Support</h4>
          <ul className="space-y-2">
            {["Support Center", "Cancel Booking", "Refund Policy", "Partner With Us"].map(
              (item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-8 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs space-y-4 sm:space-y-0">
          <p>
            Some hotels require you to cancel more than 24 hours before check-in. Details{" "}
            <Link href="#" className="underline hover:text-white transition">
              here
            </Link>
            .
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4">
          © {new Date().getFullYear()} ALX — All rights reserved.
        </p>
      </div>
    </footer>
  );
}