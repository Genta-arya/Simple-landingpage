import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatBot = ({ setIsChatVisible }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [options, setOptions] = useState([
    "Tell me about your photography services.",
    "How much do your photography services cost?",
    "Can I see some sample photos?",
  ]);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Initial greeting message from the bot
    setMessages([
      {
        text: "Hello! I'm here to assist you with your photography service questions. How can I help you today?",
        sender: "bot",
      },
    ]);
  }, []);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      // User message
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");

      // Bot response (you can customize this logic)
      if (selectedOption !== null) {
        // Display information related to the selected option
        setMessages([
          ...messages,
          {
            text: `Here's some information about "${options[selectedOption]}":`,
            sender: "bot",
          },
        ]);
       
        switch (selectedOption) {
          case 0:
            setMessages([
              ...messages,
              {
                text: "Our photography services include portrait, landscape, and event photography. We offer a range of packages to suit your needs.",
              },
            ]);
            break;
          case 1:
            setMessages([
              ...messages,
              {
                text: "Our pricing varies depending on the type of photography and package you choose. Please visit our website or contact us for detailed pricing information.",
              },
            ]);
            break;
          case 2:
            setMessages([
              ...messages,
              {
                text: "Sure, you can view our sample photos on our website gallery. We have a diverse portfolio showcasing our work.",
              },
            ]);
            break;
          default:
            setMessages([
              ...messages,
              {
                text: "I'm sorry, I'm just a demo bot and can't provide specific information. You can choose from the following options:",
                sender: "bot",
              },
            ]);
        }
        setSelectedOption(null);
        setOptions([
          "Tell me about your photography services.",
          "How much do your photography services cost?",
          "Can I see some sample photos?",
        ]);
      } else {
      
        setMessages([
          ...messages,
          {
            text: "I'm sorry, I'm just a demo bot and can't provide specific information. You can choose from the following options:",
            sender: "bot",
          },
        ]);
      }
    }
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setInputMessage(options[index]);
  };

  return (
    <div className="fixed bottom-16 right-8 bg-white w-80 p-4 rounded-lg shadow-md">
      <div className="flex justify-end mb-2">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => setIsChatVisible(false)}
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg" />
        </button>
      </div>
      <div className="border border-gray-300 p-2 h-48 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <p className={` mt-5 rounded-lg p-2 inline-block ${message.sender === "user" ? "bg-blue-200 text-blue-700" : "bg-gray-200 text-gray-700"}`}>
              {message.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l-md p-2"
          placeholder="Ask your question..."
          value={inputMessage}
          readOnly={true} 
        />
        <button
          className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
        </button>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Choose an option:</p>
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer text-blue-500 hover:underline"
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatBot;
