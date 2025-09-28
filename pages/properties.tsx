// import api from "../lib/api";

// export async function getServerSideProps() {
//   const response = await api.get("/properties");
//   return { props: { properties: response.data } };
// }


import api from "../lib/api";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { PLACEHOLDER_IMAGE } from "../constants";
import OSMEmbed from "../components/common/OSMEmbed";

interface PropertySummary {
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

interface PropertiesPageProps {
  properties: PropertySummary[];
  q?: string;
  maxPrice?: string;
  minRating?: string;
  superhost?: string;
}

export default function PropertiesPage({ properties, q = "", maxPrice = "" }: PropertiesPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Available Properties</h1>
        <FilterBar initialQ={q} initialMaxPrice={maxPrice} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <ul className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <li key={property.id} className="border rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src={property.imageUrl || PLACEHOLDER_IMAGE}
                alt={property.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex justify-between p-3">
                {property.isSuperhost && (
                  <span className="bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">Superhost</span>
                )}
                {typeof property.rating === 'number' && (
                  <span className="ml-auto bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-600" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    {property.rating?.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.title}</h2>
              {property.location && (
                <p className="text-gray-600">{property.location}</p>
              )}
              {property.price !== undefined && (
                <p className="font-bold text-gray-900">{`$${property.price}`} <span className="text-gray-600 text-sm">/ night</span></p>
              )}
              <div className="mt-2">
                <Link href={`/property/${property.id}`} className="text-pink-600 hover:underline">
                  View details →
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <aside className="hidden xl:block xl:col-span-1">
        <div className="sticky top-24 border rounded-xl h-[420px] overflow-hidden">
          <OSMEmbed markers={properties.map(p => ({ id: p.id, title: p.title, lat: p.lat ?? 0, lng: p.lng ?? 0 }))} />
        </div>
      </aside>
    </div>
    </div>
  );
}

import type { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q = "", maxPrice = "", minRating = "", superhost = "" } = (context.query || {}) as Record<string, string>;
  const response = await api.get("/properties", { params: { q, maxPrice, minRating, superhost } });
  return { props: { properties: response.data, q: String(q), maxPrice: String(maxPrice), minRating: String(minRating), superhost: String(superhost) } };
};

function FilterBar({ initialQ, initialMaxPrice, initialMinRating, initialSuperhost }: { initialQ?: string; initialMaxPrice?: string; initialMinRating?: string; initialSuperhost?: string }) {
  const router = useRouter();
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = String(fd.get("q") || "");
    const maxPrice = String(fd.get("maxPrice") || "");
    const minRating = String(fd.get("minRating") || "");
    const superhost = fd.get("superhost") ? "true" : "";
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (minRating) params.set("minRating", minRating);
    if (superhost) params.set("superhost", superhost);
    const qs = params.toString();
    router.push(`/properties${qs ? '?' + qs : ''}`);
  }
  return (
    <form onSubmit={onSubmit} className="hidden md:flex items-center gap-3">
      <input name="q" defaultValue={initialQ} className="border rounded-full px-4 py-2 text-sm" placeholder="Location or keyword" />
      <input name="maxPrice" defaultValue={initialMaxPrice} className="border rounded-full px-4 py-2 text-sm" placeholder="Price max" />
      <input name="minRating" defaultValue={initialMinRating} className="border rounded-full px-4 py-2 text-sm" placeholder="Min rating" />
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input name="superhost" type="checkbox" defaultChecked={initialSuperhost === 'true'} className="rounded" /> Superhost only
      </label>
      <button type="submit" className="px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm">Apply</button>
    </form>
  );
}
