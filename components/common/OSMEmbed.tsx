import React from "react";

export default function OSMEmbed({ markers }: { markers: { id: string; title: string; lat: number; lng: number }[] }) {
  const first: { lat: number; lng: number; title: string } = markers[0] || { lat: 20, lng: 0, title: "World" };
  const lat = first.lat;
  const lng = first.lng;
  const delta = 1.0; // degrees for bbox around center
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${lat}%2C${lng}&layer=mapnik`;
  return (
    <iframe
      title="map"
      src={src}
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}