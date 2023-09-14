import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profil from "../../../Asset/profil.png";
import ContactMap from "../Component/Maps";
import "../../../Style/ContactLinks.css";
function ContactLinks() {
  return (
    <div
      id="contactSection"
      className="flex flex-col items-center justify-center text-center bg-gray-700 p-5 w-screen overflow-hidden"
    >
      <h2 className="text-2xl font-semibold text-white mb-5">Contact Us</h2>
      <div className="gradient-border">
        {" "}
        <img
          src={profil}
          alt="Contact Us"
          className="w-40 h-40 rounded-full p-1"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <a
          href="mailto:staryboy@email.com"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Email
        </a>

        <a
          href="https://wa.me/6282220082754"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
          WhatsApp
        </a>

        <a
          href="https://www.instagram.com/starrboyszzz"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faInstagram} className="mr-2" />
          Instagram
        </a>
      </div>
      <ContactMap />
    </div>
  );
}

export default ContactLinks;
