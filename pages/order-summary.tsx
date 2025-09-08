import { useRouter } from "next/router";
import Button from "../components/common/Button";

interface BookingDetails {
  propertyName: string;
  price: string; // ← query params are strings
  bookingFee: string;
  totalNights: string;
  startDate: string;
}

const OrderSummaryPage = () => {
  const router = useRouter();
  const { propertyName, price, bookingFee, totalNights, startDate } =
    router.query as Partial<BookingDetails>;

  // Validate required data
  if (!propertyName || !price || !bookingFee || !totalNights || !startDate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-red-500 font-medium">❌ Invalid booking details.</p>
          <Button
            label="← Back to Booking"
            onClick={() => router.push("/booking")}
            variant="secondary"
            className="mt-4"
          />
        </div>
      </div>
    );
  }

  // Parse numbers safely
  const priceNum = parseFloat(price);
  const feeNum = parseFloat(bookingFee);
  const nightsNum = parseInt(totalNights, 10);
  const subtotal = priceNum * nightsNum;
  const total = subtotal + feeNum;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Review Your Booking
          </h1>
          <p className="text-gray-600 mt-2">
            Almost there! Confirm your stay details below.
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Property Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-32 flex-shrink-0">
                <img
                  src="https://picsum.photos/300/200"
                  alt={propertyName}
                  className="w-full h-32 sm:h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-gray-900">
                  {propertyName}
                </h2>
                <p className="text-gray-600 mt-1">
                  📅 Check-in: <span className="font-medium">{startDate}</span>
                </p>
                <p className="text-gray-600">
                  🛏️ {nightsNum} night{nightsNum !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Price Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  ${priceNum.toLocaleString()} × {nightsNum} night
                  {nightsNum !== 1 ? "s" : ""}
                </span>
                <span className="font-medium">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Booking Fee</span>
                <span className="font-medium">${feeNum.toLocaleString()}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-xl font-extrabold text-green-600">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800 text-sm">
                💡 You won’t be charged yet. Payment is due 24 hours before check-in.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button
                label="← Back"
                onClick={() => router.back()}
                variant="secondary"
                className="flex-1"
              />
              <Button
                label="Confirm Booking"
                onClick={() => {
                  alert("🎉 Booking confirmed!");
                  // In real app: call API, then redirect to success page
                  // router.push('/booking/success');
                }}
                variant="primary"
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-6">
          By confirming, you agree to our{" "}
          <button className="underline hover:text-gray-700">Terms of Service</button> and{" "}
          <button className="underline hover:text-gray-700">Cancellation Policy</button>.
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryPage;