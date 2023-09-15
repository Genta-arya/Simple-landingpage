import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import ContactLinks from "./Component/Contact";
import ProjectContent from "./Component/Gallery";
import Content from "./Component/Content";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ProductLayout from "./Component/Product";
import FloatingMessageButton from "./Component/FNQ";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const scrollToProject = () => {
    scroller.scrollTo("projectSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div style={{ paddingBottom: "60px" }}>
      <Navbar scrollToProject={scrollToProject} />
      <Header />
      <Element name="contentSection">
        <Content />
      </Element>

      <Element name="projectSection">
        <ProjectContent />
      </Element>

      <Element name="contactSection">
        <ContactLinks scrollToProject={scrollToProject} />
      </Element>

      <Footer />

      <FloatingMessageButton
        isChatVisible={isChatVisible}
        setIsChatVisible={setIsChatVisible}
        className="fixed bottom-10"
      />

      {/* {showScrollButton && (
        <button
          className="fixed bottom-10 left-10 bg-gray-700 text-white p-4 rounded-3xl cursor-pointer hover:bg-gray-500"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )} */}
    </div>
  );
}

export default Home;
