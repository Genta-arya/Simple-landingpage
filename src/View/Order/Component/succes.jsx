import React from "react";

import sukses from "../../../Asset/sukses.png";

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 p-12">
      <div className="bg-white  rounded shadow-md text-center border-8 border-green-800 p-12 flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Payment Successful!</h1>
        <div className="flex items-center justify-center mb-4">
          <img src={sukses} alt="Success" className="w-40 h-50" />
        </div>
        <p className="text-gray-600">Thank you for your order.</p>

        <p className="text-gray-600">
          Please check your email for payment proof.
        </p>

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

export default Success;
