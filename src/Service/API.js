import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_URL;

const API_ENDPOINTS = {
  ORDER: `${API_BASE_URL}order`,
};

const sendWhatsAppMessage = (orderData) => {
  if (!orderData) {
    console.error("Order data is missing.");
    return;
  }
  const websiteURL = "https://omyoo-studio.vercel.app/";
  const phoneNumber = "6289680768061";
  const message = `Hello, I would like to order the product ${orderData.nm_product} with the following details:
      Store: ${websiteURL}
      Product Name: ${orderData.nm_product}
      Price: ${orderData.price}
      Name: ${orderData.name}
      Contact: ${orderData.contact}
      Email: ${orderData.email}
      Address: ${orderData.address}
      Time: ${orderData.time}
      Date: ${orderData.date}
  
      Please confirm this order.`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

export { sendWhatsAppMessage, API_ENDPOINTS };
