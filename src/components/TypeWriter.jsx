import { useEffect, useState } from 'react';

const TypeWriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="relative">
      {displayedText}
      {currentIndex < text.length && (
        <span className="absolute right-0 top-0 h-full w-0.5 bg-cyan-400 animate-pulse"></span>
      )}
    </span>
  );
};

export default TypeWriter;
