import React, { useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendWhatsAppMessage } from "../../../Service/API";
import sukses from "../../../Asset/sukses.png";
import formatRupiah from "../../../Utils/Format";


function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderData = location.state ? location.state.orderData : null;
    if (!orderData) {
      navigate("/sukses");
    } else {
      setOrder(orderData);
    }
  }, [location.state, navigate]);

  if (!order) {
    return null;
  }
  const handleContactAdminClick = () => {
    sendWhatsAppMessage(order);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 p-12">
      <div className="bg-white  rounded-xl  text-center  p-1 flex flex-col items-center shadow-2xl drop-shadow-2xl shadow-green-800">
        <h1 className="text-3xl font-semibold mb-4">Order Successful!</h1>
        <div className="flex items-center justify-center mb-4">
          <img src={sukses} alt="Success" className="w-40 h-50" />
        </div>
        <p className="text-gray-600">
          Thank you for your order. Your order will be processed shortly.
        </p>
        <p className="text-gray-600">
          Please contact the admin for further information regarding your order.
        </p>
        <p className="text-gray-600">
          Please check your email for payment proof.
        </p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Order Details:</h2>

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 px-4">
              <p className="text-gray-700 mb-2">
                Product Name: {order.nm_product}
              </p>
              <p className="text-gray-700 mb-2">
                Price: {formatRupiah(order.price)}
              </p>
              <p className="text-gray-700 mb-2">Name: {order.name}</p>
              <p className="text-gray-700 mb-2">Contact: {order.contact}</p>
            </div>
            <div className="w-full sm:w-1/2 px-4">
              <p className="text-gray-700 mb-2">Email: {order.email}</p>
              <p className="text-gray-700 mb-2">Address: {order.address}</p>
              <p className="text-gray-700 mb-2">Time: {order.time}</p>
              <p className="text-gray-700 mb-2">Date: {order.date}</p>
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
          <button
            onClick={handleContactAdminClick}
            className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-300 ml-2"
          >
            Contact Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
