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
  const [theme, setTheme] = useState("light"); // Initialize with the light theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(theme === "light" ? "dark" : "light");
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

  const scrollToProject = () => {
    scroller.scrollTo("projectSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`theme-${theme}`} style={{ paddingBottom: "60px" }}>
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
        className="fixed bottom-10 left-10"
      />
    </div>
  );
}

export default Home;
