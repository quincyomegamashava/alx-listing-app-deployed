import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

interface Property {
  id: string;
  title: string;
  imageUrl: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchProperties = async () => {
    try {
      const response = await axios.get(
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


  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta
          name="description"
          content="Find your favorite place to stay with ALX Listings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="bg-green-700 text-white text-sm text-center py-2">
        Overseas trip? Get the latest information on travel guides ·{" "}
        <a href="#" className="underline">
          More Info
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/assets/Hero section imge.png"
          alt="Scenic view"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg sm:text-xl">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "All",
            "Top Villa",
            "Free Reschedule",
            "Book Now, Pay later",
            "Self Checkin",
            "Instant Book",
          ].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100 transition"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {loading && <p className="col-span-full text-center">Loading properties...</p>}
        {error && <p className="col-span-full text-center text-red-500">{error}</p>}
        {!loading && !error && properties.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No properties found.</p>
        )}
        {properties.map((property) => (
          <Card key={property.id} title={property.title} image={property.imageUrl} />
        ))}
      </section>

      {/* Show More Button */}
      <div className="flex justify-center mb-12">
        <Button
          label="Show more"
          onClick={() => alert("Loading more listings...")}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-2">alx</h3>
            <p>
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul>
              <li>
                <a href="#">Apartments in Dubai</a>
              </li>
              <li>
                <a href="#">Hotels in New York</a>
              </li>
              <li>
                <a href="#">Villa in Spain</a>
              </li>
              <li>
                <a href="#">Mansion in Indonesia</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Cancel booking</a>
              </li>
              <li>
                <a href="#">Refunds</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-xs">
          Some hotel requires you to cancel more than 24 hours before check-in.
          Details{" "}
          <a href="#" className="underline">
            here
          </a>
          .
          <br />
          © {new Date().getFullYear()} ALX — Terms | Privacy | Cookies
        </div>
      </footer>
    </>
  );
}
