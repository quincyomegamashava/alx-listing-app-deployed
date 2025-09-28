import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const BookingForm = () => {
  const router = useRouter();
  const { id, title, price, imageUrl } = router.query;

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
        totalNights: 3,
        startDate: "2025-09-10",
        imageUrl: (imageUrl as string) || "/assets/Logos.png",
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Book your stay at
          </h1>
          <h2 className="text-xl font-bold text-green-600">{title}</h2>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info Section */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                👤 Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition placeholder-gray-400"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                💳 Payment Information
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-green-800 text-sm">
                  🔒 Your payment is secure. We use industry-standard encryption.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number *
                  </label>
                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition placeholder-gray-400 pl-10"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                    CVV *
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Expiration Date *
                  </label>
                  <input
                    id="expirationDate"
                    type="text"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="MM/YY"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Billing Address Section */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                🏠 Billing Address
              </h3>
              <div className="mb-4">
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  id="streetAddress"
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                  placeholder="123 Main Street"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="NY"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="10001"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition placeholder-gray-400"
                    placeholder="United States"
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>✅ Confirm & Pay ${Number(price).toLocaleString()}</span>
                  </>
                )}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center">
                {error}
              </div>
            )}

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center mt-4">
              By clicking “Confirm & Pay”, you agree to our{" "}
              <a href="#" className="underline hover:text-gray-700">Terms of Service</a> and{" "}
              <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
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

