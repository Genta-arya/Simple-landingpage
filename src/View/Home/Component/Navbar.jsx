import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../../Style/Content.css";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const starStyle = {
    color: "yellow",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="bg-gray-800 shadow-md w-screen overflow-hidden ">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white hover:text-yellow-300">
            <FontAwesomeIcon icon={faStar} className="mr-2" style={starStyle} />{" "}
            <span className="text-shimmer text-lg font-bold">
              STARBOY STUDIO
            </span>
          </Link>

          <button
            className="mobile-sidebar-toggle md:hidden text-white"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <nav className="hidden md:block md:flex md:space-x-4  justify-end">
          <Link
            to="/"
            className="text-white hover:text-gray-300 py-2 px-4 block md:inline-block hover:border-b-2 border-white "
          >
            Home
          </Link>
          <ScrollLink
            to="productInfo"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-gray-300 py-2 px-4 block md:inline-block hover:border-b-2 border-white"
            style={{ cursor: "pointer" }}
          >
            Product
          </ScrollLink>
          <ScrollLink
            to="projectSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-gray-300 py-2 px-4 block md:inline-block hover:border-b-2 border-white"
            style={{ cursor: "pointer" }}
          >
            Gallery
          </ScrollLink>
          <ScrollLink
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-gray-300 py-2 px-4 block md:inline-block hover:border-b-2 border-white"
            style={{ cursor: "pointer" }}
          >
            Contact
          </ScrollLink>

          <Link
            to="/jobs"
            className="text-white hover:text-gray-300 py-2 px-4 block md:inline-block hover:border-b-2 border-white "
          >
            Jobs
          </Link>
        </nav>
      </div>

      {/* Sidebar untuk tampilan mobile */}
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } md:hidden bg-gray-800 px-2 pt-2 pb-3`}
      >
        <Link to="/" className="text-white hover:text-gray-300 py-2 px-4 block">
          Home
        </Link>
        <ScrollLink
          to="productInfo"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 py-2 px-4 block"
          style={{ cursor: "pointer" }}
        >
          Product
        </ScrollLink>
        <ScrollLink
          to="projectSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 py-2 px-4 block"
          style={{ cursor: "pointer" }}
        >
          Gallery
        </ScrollLink>
        <ScrollLink
          to="contactSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 py-2 px-4 block"
          style={{ cursor: "pointer" }}
        >
          Contact
        </ScrollLink>
        <Link
          to="/jobs"
          className="text-white hover:text-gray-300 py-2 px-4 block md:inline-block hover:border-b-2 border-white "
        >
          Jobs
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
