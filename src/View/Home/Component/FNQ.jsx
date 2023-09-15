import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ChatBot from "./ChatBot";

const FloatingMessageButton = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleButtonClick = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div>
      {isChatVisible ? (
        <ChatBot setIsChatVisible={setIsChatVisible} />
      ) : (
        <div
          className="fixed bottom-8 right-8 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-blue-600 transform hover:scale-105 transition-transform"
          onClick={handleButtonClick}
        >
          <FontAwesomeIcon icon={faComment} className="text-lg" />
        </div>
      )}
    </div>
  );
};

export default FloatingMessageButton;
