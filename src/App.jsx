import React, {useState} from 'react';
import './App.css';

var emojiDictionary = {
  "⚽": "Soccer",
    "⚾": "Baseball",
    "🏀": "Basketball",
    "🏈": "Rugby",
    "🎾": "Tennis",
    "🏏": "Cricket",
    "🏑": "Hockey",
    "⛳": "Golf",
    "🏊‍♂️": "Swimming",
    "🏸": "Badminton"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState('');

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return(
    <div className='App'>
    <h1>select game fav</h1>
    <h2>{meaning}</h2>
      {emojisWeKnow.map(function (emoji) {
      return(
        <div
           onClick={() => emojiClickHandler(emoji)}
          style={{
            fontSize: '2rem',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'inline'
            
          }}
          >{" "}
          {emoji}
        </div>
      )
      })}
    </div>
  )
}