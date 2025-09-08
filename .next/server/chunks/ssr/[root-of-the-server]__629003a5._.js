module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[externals]/axios [external] (axios, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/booking/BookingForm.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const BookingForm = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id, title, price } = router.query; // property data from URL
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
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
        country: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].post("/api/bookings", {
                ...formData,
                propertyId: id
            });
            const bookingDetails = {
                propertyName: title,
                price: Number(price),
                bookingFee: 50,
                totalNights: 3,
                startDate: "2025-09-10"
            };
            router.push({
                pathname: "/order-summary",
                query: bookingDetails
            });
        } catch (err) {
            console.error("Booking failed:", err);
            setError("❌ Failed to submit booking. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 shadow-md rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: [
                    "Booking ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/components/booking/BookingForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full transition",
                        children: loading ? "Processing..." : `Confirm & Pay $${price}`
                    }, void 0, false, {
                        fileName: "[project]/components/booking/BookingForm.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-red-500 mt-2",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/booking/BookingForm.tsx",
                        lineNumber: 72,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/booking/BookingForm.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/booking/BookingForm.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = BookingForm;
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/booking/OrderSummary.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const OrderSummary = ({ bookingDetails })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 shadow-md rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: "Review Order Details"
            }, void 0, false, {
                fileName: "[project]/components/booking/OrderSummary.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: bookingDetails.imageUrl,
                        alt: bookingDetails.propertyName,
                        className: "w-32 h-32 object-cover rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/components/booking/OrderSummary.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "ml-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: bookingDetails.propertyName
                            }, void 0, false, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 20,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "4.76 (345 reviews)"
                            }, void 0, false, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 21,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: [
                                    bookingDetails.startDate,
                                    " • ",
                                    bookingDetails.totalNights,
                                    " Nights"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 22,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/booking/OrderSummary.tsx",
                        lineNumber: 19,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/booking/OrderSummary.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Booking Fee"
                            }, void 0, false, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 31,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    "$",
                                    bookingDetails.bookingFee
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 32,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/booking/OrderSummary.tsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 35,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    "$",
                                    bookingDetails.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 36,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/booking/OrderSummary.tsx",
                        lineNumber: 34,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-between font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Grand Total"
                            }, void 0, false, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 39,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    "$",
                                    bookingDetails.bookingFee + bookingDetails.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/booking/OrderSummary.tsx",
                                lineNumber: 40,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/booking/OrderSummary.tsx",
                        lineNumber: 38,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/booking/OrderSummary.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/booking/OrderSummary.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = OrderSummary;
 // interface BookingDetails {
 //   propertyName: string;
 //   price: number;
 //   bookingFee: number;
 //   totalNights: number;
 //   startDate: string;
 // }
 // const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
 //   <div className="bg-white p-6 shadow-md rounded-lg">
 //     <h2 className="text-xl font-semibold">Review Order Details</h2>
 //     <div className="flex items-center mt-4">
 //       <img
 //         src="https://example.com/property.jpg"
 //         alt="Property"
 //         className="w-32 h-32 object-cover rounded-md"
 //       />
 //       <div className="ml-4">
 //         <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
 //         <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
 //         <p className="text-sm text-gray-500">
 //           {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
 //         </p>
 //       </div>
 //     </div>
 //     {/* Price Breakdown */}
 //     <div className="mt-6 space-y-2">
 //       <div className="flex justify-between">
 //         <p>Booking Fee</p>
 //         <p>${bookingDetails.bookingFee}</p>
 //       </div>
 //       <div className="flex justify-between">
 //         <p>Subtotal</p>
 //         <p>${bookingDetails.price}</p>
 //       </div>
 //       <div className="flex justify-between font-semibold">
 //         <p>Grand Total</p>
 //         <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
 //       </div>
 //     </div>
 //   </div>
 // );
 // export default OrderSummary;
}}),
"[project]/components/booking/CancellationPolicy.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const CancellationPolicy = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "mt-6 bg-white p-6 shadow-md rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: "Cancellation policy"
            }, void 0, false, {
                fileName: "[project]/components/booking/CancellationPolicy.tsx",
                lineNumber: 3,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "mt-2 text-gray-600",
                children: "Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund."
            }, void 0, false, {
                fileName: "[project]/components/booking/CancellationPolicy.tsx",
                lineNumber: 4,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mt-6",
                children: "Ground Rules"
            }, void 0, false, {
                fileName: "[project]/components/booking/CancellationPolicy.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                className: "mt-2 text-gray-600 list-disc list-inside",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: "Follow the house rules"
                    }, void 0, false, {
                        fileName: "[project]/components/booking/CancellationPolicy.tsx",
                        lineNumber: 10,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        children: "Treat your Host’s home like your own"
                    }, void 0, false, {
                        fileName: "[project]/components/booking/CancellationPolicy.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/booking/CancellationPolicy.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/booking/CancellationPolicy.tsx",
        lineNumber: 2,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = CancellationPolicy;
}}),
"[project]/pages/booking/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// import BookingForm from "@/components/booking/BookingForm";
// import OrderSummary from "@/components/booking/OrderSummary";
// import CancellationPolicy from "@/components/booking/CancellationPolicy";
__turbopack_context__.s({
    "default": (()=>BookingPage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/booking/BookingForm.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$OrderSummary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/booking/OrderSummary.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$CancellationPolicy$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/booking/CancellationPolicy.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
function BookingPage() {
    const bookingDetails = {
        propertyName: "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/pages/booking/index.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$CancellationPolicy$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/pages/booking/index.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/booking/index.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$booking$2f$OrderSummary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    bookingDetails: bookingDetails
                }, void 0, false, {
                    fileName: "[project]/pages/booking/index.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/booking/index.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/booking/index.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__629003a5._.js.map