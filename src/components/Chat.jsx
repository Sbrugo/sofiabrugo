import React, { useState } from "react";
import imagen from "../assets/rubberduck.png";
import "../App.css";
import { Typewriter } from "./Typewriter";

const Chat = () => {
  const [opinions, setOpinions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const pseudocode = [
    "1. Look at the duck.",
    "2. Think about this website.",
    "3. Tell him about it.",
    "4. Press Enter.",
  ];

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      setOpinions([...opinions, trimmed]);
      setInputValue("");
      setMessage("Thank you!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center group gap-6 bg-white border border-gray-100  hover:bg-yellow-100 hover:border-yellow-200 group-hover:text-shadow-2xs rounded-2xl hover:shadow-yellow-200 hover:shadow-2xl p-6 md:p-8 w-full max-w-4xl mx-auto my-6">
      <div className="flex-1">
        <Typewriter text="I would love your feedback"></Typewriter>
        <h2 className="text-xl font-semibold font-mono mb-4">
          <span className="text-2xl">🐤</span>
          <p className="text-base">Tell your duck what you think</p>
          <span className="text-2xl"></span>
        </h2>

        <div className="italic font-bold text-sm mb-4 space-y-1">
          {pseudocode.map((step, index) => (
            <div key={index}>{step}</div>
          ))}
        </div>

        {message && (
          <p className="text-green-700 font-medium mb-2">{message}</p>
        )}

        <input
          type="text"
          placeholder="Feel free to give advice, I appreciate it"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="w-full p-3 rounded-xl border border-indigo-200 shadow-sm shadow-indigo-100 group-hover:border-yellow-100 group-hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-100 mb-3"
        />

        <button
          onClick={handleSubmit}
          className="bg-indigo-100 px-4 py-2 rounded-xl shadow hover:shadow-md transition"
        >
          Enter
        </button>

        {opinions.length > 0 && (
          <div className="mt-6">
            <h3 className="font-medium mb-2">Your opinions:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
              {opinions.map((op, i) => (
                <li key={i}>{op}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <img
        src={imagen}
        alt="Rubber duck"
        className="w-24 md:w-40 flex-shrink-0"
      />
    </div>
  );
};

export default Chat;
