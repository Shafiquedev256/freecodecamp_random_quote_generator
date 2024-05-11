import React, { useState } from "react";

type Quote = {
  text: string;
  author: string;
};
const colors: string[] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-rose-500",
  "bg-emerald-500",
  "bg-fuchsia-500",
  "bg-violet-500",
  "bg-sky-500",
  "bg-amber-500",
  "bg-lime-500",
  "bg-warmGray-500",
  "bg-trueGray-500",
  "bg-coolGray-500",
  "bg-blueGray-500",
];

const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
];

const App: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [bgColor, setBgColor] = useState<string>("bg-gray-200");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);

    setCurrentQuote(quotes[randomIndex]);
    setBgColor(colors[randomColorIndex]);
  };

  return (
    <div
      className={`min-h-screen flex space-y-8 flex-col items-center justify-center ${bgColor}`}
    >
      <div className='max-w-md p-8 bg-white rounded-lg shadow-lg'>
        <blockquote className='text-2xl italic'>{currentQuote.text}</blockquote>
        <p className='text-lg mt-4'>- {currentQuote.author}</p>
        <button
          onClick={generateQuote}
          className='mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
        >
          Generate Quote
        </button>
      </div>
      <footer className='font-medium flex flex-row space-x-4'>
        <span>Designed and Created by Musinguzi Shafiq @2024</span>
        <a
          href='https://github.com/Shafiquedev256/freecodecamp_random_quote_generator'
          className='text-black underline'
        >
          view code
        </a>
      </footer>
    </div>
  );
};

export default App;
