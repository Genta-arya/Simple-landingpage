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
  const message = `Hai, saya ingin memesan produk ${orderData.nm_product} dengan detail sebagai berikut:
    Store: ${websiteURL}
    Nama Produk: ${orderData.nm_product}
    Harga: ${orderData.price}
    Nama: ${orderData.name}
    Kontak: ${orderData.contact}
    Email: ${orderData.email}
    Alamat: ${orderData.address}
    Jam: ${orderData.time}
    Tanggal: ${orderData.date}

    Silakan konfirmasi pesanan ini.`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

export { sendWhatsAppMessage  , API_ENDPOINTS};
