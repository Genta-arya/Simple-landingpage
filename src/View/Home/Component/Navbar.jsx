import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-gray-700 p-6 w-screen overflow-hidden ">
      <div className="container mx-auto flex justify-between items-center ">
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/" className="text-white hover:border-b-2 border-white">
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="photographyInfo" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
              className="text-white hover:border-b-2 border-white"
              style={{ cursor: 'pointer' }}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projectSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
              className="text-white hover:border-b-2 border-white"
              style={{ cursor: 'pointer' }}
            >
              Gallery
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
              className="text-white hover:border-b-2 border-white"
              style={{ cursor: 'pointer' }}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
