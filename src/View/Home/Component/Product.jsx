import React from "react";
import products from "../../../Model/ProductData";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../../Style/Content.css";

function ProductLayout() {
  return (
    <div className=" container mx-auto mt-12 bg-gray-200 rounded-full p-8 border-2 pb-16 " id="productInfo">
      <h2 className="text-3xl font-bold mb-4 text-center text-white bg-black w-60 rounded-full p-2 shines ">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md relative drop-shadow-2xl  "
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-40 rounded-md mb-4 "
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold">{product.price}</p>
            <ScrollLink
              to="contactSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={2500}
              className="bg-gray-700 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800 absolute bottom-4 right-4 animate-none hover:scale-110 transition-all delay-75"
              style={{ cursor: "pointer" }}
            >
              Order Now
            </ScrollLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductLayout;
