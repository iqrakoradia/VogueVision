import React, { useState } from "react";
import { FaCheckCircle, FaAward, FaStar } from "react-icons/fa";


const questions = [
  {
    question: "How do you feel about bold colors?",
    options: ["Love them!", "Prefer neutrals", "Depends on my mood", "I like pastels"],
  },
  {
    question: "What’s your go-to outfit for a casual day?",
    options: ["Jeans and a T-shirt", "Flowy dress or loose pants", "Athleisure set", "Something tailored"],
  },
  {
    question: "What type of shoes do you wear the most?",
    options: ["Sneakers", "Boots", "Heels or flats", "Loafers"],
  },
  {
    question: "How do you accessorize?",
    options: ["Minimal jewelry", "Layered accessories", "Statement pieces", "No accessories"],
  },
  {
    question: "Which fabric do you prefer?",
    options: ["Cotton", "Silk", "Denim", "Linen"],
  },
];

const personalities = [
  { type: "Classic Chic", description: "Timeless, elegant, and polished." },
  { type: "Bohemian Free Spirit", description: "Flowy, artistic, and nature-inspired." },
  { type: "Streetwear Aficionado", description: "Edgy, urban, and trend-conscious." },
  { type: "Minimalist", description: "Clean, simple, and neutral tones." },
  { type: "Eccentric Trendsetter", description: "Bold, unique, and experimental." },
  { type: "Romantic Feminine", description: "Soft, floral, and graceful." },
  { type: "Preppy Sophisticate", description: "Structured, tailored, and collegiate-inspired." },
  { type: "Athleisure Enthusiast", description: "Sporty, comfortable, and functional." },
  { type: "Retro Nostalgic", description: "Vintage-inspired, colorful, and playful." },
  { type: "Grunge Rebel", description: "Dark, edgy, and alternative." },
];

const StyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      calculateResult(updatedAnswers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResult = () => {
    const randomIndex = Math.floor(Math.random() * personalities.length);
    setResult(personalities[randomIndex]);
    setShowPopup(true);
  };

  return (
    <div className="quiz-container">
      {showPopup ? (
        <div className="quiz-popup">
          <div className="popup-content">
            <FaAward className="celebration-icon" />
            <h2>🎉 Your Fashion Personality 🎉</h2>
            <h3>{result.type}</h3>
            <p>{result.description}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      ) : (
        <div className="quiz-flashcard">
          <h2 className="quiz-question-number">Question {currentQuestion + 1} / {questions.length}</h2>
          <div className="quiz-card">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleQuiz;
