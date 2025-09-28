// components/property/PropertyDetail.tsx
// components/property/PropertyDetail.tsx
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    imageUrl: string;
  };
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push({
      pathname: "/booking",
      query: {
        id: property.id,
        title: property.title,
        price: property.price,
        imageUrl: property.imageUrl,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="rounded-xl overflow-hidden shadow-md relative h-96">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600 mt-2">{property.location}</p>
        <p className="text-indigo-600 font-semibold mt-2">
          ${property.price} / night
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {property.description}
        </p>

        <div className="mt-8">
          <ReviewSection propertyId={property.id} />
        </div>

        <button
          onClick={handleBookNow}
          className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyDetail;



























// // components/property/PropertyDetail.tsx
// import React from "react";

// interface PropertyDetailProps {
//   property: {
//     id: string;
//     title: string;
//     description: string;
//     location: string;
//     price: number;
//     imageUrl: string;
//   };
// }

// const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <div className="rounded-xl overflow-hidden shadow-md">
//         <img
//           src={property.imageUrl}
//           alt={property.title}
//           className="w-full h-96 object-cover"
//         />
//       </div>

//       <div className="mt-6">
//         <h1 className="text-3xl font-bold">{property.title}</h1>
//         <p className="text-gray-600 mt-2">{property.location}</p>
//         <p className="text-indigo-600 font-semibold mt-2">
//           ${property.price} / night
//         </p>
//         <p className="mt-4 text-gray-700 leading-relaxed">
//           {property.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;
