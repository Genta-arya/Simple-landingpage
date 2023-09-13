import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactLinks() {

  
  return (
    <div id="contactSection" className="flex flex-col items-center justify-center text-center bg-gray-700 p-5 w-screen overflow-hidden">
      <h2 className="text-3xl font-semibold text-white mb-8">Contact Us</h2>

      <div className="grid grid-cols-3 gap-4">
        <a href="mailto:mgentaarya@email.com" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Email
        </a>

        <a href="https://github.com/genta-arya" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/m-gentha-arya-pratama-37b419231//" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          LinkedIn
        </a>
      </div>

     
    </div>
  );
}

export default ContactLinks;
