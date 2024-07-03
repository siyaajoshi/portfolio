import React, { useEffect, useState } from "react";

const SiyaTypeWritter = ({words, speed}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currenttext, setCurrenttext] = useState("");
  const currentWord = words[currentWordIndex];
  
  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setCurrenttext(currentWord.slice(0, charIndex));
        charIndex++
      } else {
        // word typed out, clear and move next word 
        clearInterval(typingInterval);

        setTimeout (() => {
          setCurrentWordIndex((prevIndex) =>
           prevIndex === words.length - 1 ? 0 : prevIndex + 1 
           );
        },1000);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWord, speed, words]);

  return (
    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-7">
    {currenttext}       
  </span>
  ); 
};

export default SiyaTypeWritter;
