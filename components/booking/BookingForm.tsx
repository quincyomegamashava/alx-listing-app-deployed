const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium">Card Number</label>
        <input type="text" className="border p-2 w-full mt-1 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">CVV</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium">Street Address</label>
        <input type="text" className="border p-2 w-full mt-1 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">City</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">State</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Country</label>
          <input type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full transition"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
