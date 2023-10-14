import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter-container">
      <textarea
        rows="5"
        cols="50"
        placeholder="Start typing here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {countWords(text)}</p>
    </div>
  );
}

export default WordCounter;
