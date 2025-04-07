import { useState } from "react";
import { FaTshirt } from "react-icons/fa"; // Fashion-related icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Floating Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-pink-400 hover:bg-pink-500 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaTshirt size={24} />
      </button>

      {/* Chatbot Popup - Appears When isOpen is True */}
      {isOpen && (
        <div className="fixed right-4 bottom-16 w-72 h-96 rounded-2xl border-4 border-pink-300 shadow-lg bg-white p-2 transition-transform duration-300">
          <div className="iframe-container w-full h-full">
            <iframe
              src="https://www.yeschat.ai/i/gpts-2OTogohtBY-Personal-Stylist"
              style={{ Width: "300%", height: "300%", borderRadius: "10px", border: "none" }}
              title="Virtual Stylist Chatbot"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
