import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const BookingForm = () => {
  const router = useRouter();
  const { id, title, price } = router.query; // property data from URL

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", { ...formData, propertyId: id });

      const bookingDetails = {
        propertyName: title as string,
        price: Number(price),
        bookingFee: 50,
        totalNights: 3, // you can later let the user pick dates and calculate
        startDate: "2025-09-10", // placeholder until date picker is added
      };

      router.push({
        pathname: "/order-summary",
        query: bookingDetails,
      });
    } catch (err) {
      console.error("Booking failed:", err);
      setError("❌ Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Booking {title}</h2>
      <form onSubmit={handleSubmit}>
        {/* your existing fields unchanged */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full transition"
        >
          {loading ? "Processing..." : `Confirm & Pay $${price}`}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default BookingForm;



















// import { useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// const BookingForm = () => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     cardNumber: "",
//     expirationDate: "",
//     cvv: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       await axios.post("/api/bookings", formData);

//       // Example booking details (replace with real property data later)
//       const bookingDetails = {
//         propertyName: "Cozy Beach Villa",
//         price: 500,
//         bookingFee: 50,
//         totalNights: 3,
//         startDate: "2025-09-10",
//       };

//       router.push({
//         pathname: "/order-summary",
//         query: bookingDetails, // passed via URL
//       });
//     } catch (err) {
//       console.error("Booking failed:", err);
//       setError("❌ Failed to submit booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-6 shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold">Contact Detail</h2>
//       <form onSubmit={handleSubmit}>
//         <form onSubmit={handleSubmit}>
//         {/* Contact Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Phone Number</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//             />
//           </div>
//         </div>

//         {/* Payment Information */}
//         <h2 className="text-xl font-semibold mt-6">Pay with</h2>
//         <div className="mt-4">
//           <label className="block text-sm font-medium">Card Number</label>
//           <input
//             type="text"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             className="border p-2 w-full mt-1 rounded"
//             required
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block text-sm font-medium">Expiration Date</label>
//             <input
//               type="text"
//               name="expirationDate"
//               value={formData.expirationDate}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//               placeholder="MM/YY"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">CVV</label>
//             <input
//               type="text"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//               required
//             />
//           </div>
//         </div>

//         {/* Billing Address */}
//         <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
//         <div className="mt-4">
//           <label className="block text-sm font-medium">Street Address</label>
//           <input
//             type="text"
//             name="streetAddress"
//             value={formData.streetAddress}
//             onChange={handleChange}
//             className="border p-2 w-full mt-1 rounded"
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block text-sm font-medium">City</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">State</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="block text-sm font-medium">Zip Code</label>
//             <input
//               type="text"
//               name="zipCode"
//               value={formData.zipCode}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Country</label>
//             <input
//               type="text"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="border p-2 w-full mt-1 rounded"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full transition"
//         >
//           {loading ? "Processing..." : "Confirm & Pay"}
//         </button>

//         {/* Feedback */}
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//         {success && (
//           <p className="text-green-600 font-semibold mt-2">
//             ✅ Booking confirmed!
//           </p>
//         )}
//       </form>

//         <button
//           type="submit"
//           disabled={loading}
//           className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full transition"
//         >
//           {loading ? "Processing..." : "Confirm & Pay"}
//         </button>

//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default BookingForm;

