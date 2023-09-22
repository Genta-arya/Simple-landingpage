import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendWhatsAppMessage } from "../../../Service/API";
import sukses from "../../../Asset/fail.png";
import formatRupiah from "../../../Utils/Format";

function FailedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderData, setOrder] = useState(null);

  useEffect(() => {
    const orderData = location.state ? location.state.orderData : null;
    if (!orderData) {
      navigate("/");
    } else {

      setOrder(orderData);
    }
  }, [location.state, navigate]);

  if (!orderData) {
    return null;
  }

  const handleContactAdminClick = () => {
    sendWhatsAppMessage(orderData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 p-12">
      <div className="bg-white p-8 rounded shadow-md text-center border-8 border-red-800  flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Payment Failed</h1>
        <div className="flex items-center justify-center mb-4">
          <img src={sukses} alt="Success" className="w-40 h-50" />
        </div>
        <p className="text-gray-600">
          Your payment was not successful. You can try placing the order again.
        </p>
        <p>You can try placing the order again.</p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Order Details:</h2>

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 px-4">
              <p className="text-gray-700 mb-2">
                Product Name: {orderData.nm_product}
              </p>
              <p className="text-gray-700 mb-2">
                Price: {formatRupiah(orderData.price)}
              </p>
              <p className="text-gray-700 mb-2">Name: {orderData.name}</p>
              <p className="text-gray-700 mb-2">Contact: {orderData.contact}</p>
            </div>
            <div className="w-full sm:w-1/2 px-4">
              <p className="text-gray-700 mb-2">Email: {orderData.email}</p>
              <p className="text-gray-700 mb-2">Address: {orderData.address}</p>
              <p className="text-gray-700 mb-2">Time: {orderData.time}</p>
              <p className="text-gray-700 mb-2">Date: {orderData.date}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 mb-4"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default FailedPage;
