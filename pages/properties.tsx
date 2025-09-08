// import api from "../lib/api";

// export async function getServerSideProps() {
//   const response = await api.get("/properties");
//   return { props: { properties: response.data } };
// }


import api from "../lib/api";

export default function PropertiesPage({ properties }: { properties: any[] }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Available Properties</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <li key={property.id} className="border rounded-lg shadow p-4">
            <img
              src={property.imageUrl || "/placeholder.jpg"}
              alt={property.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{property.title}</h2>
            <p className="text-gray-600">{property.location}</p>
            <p className="font-bold text-indigo-600">${property.price} / night</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await api.get("/properties");
  return { props: { properties: response.data } };
}
