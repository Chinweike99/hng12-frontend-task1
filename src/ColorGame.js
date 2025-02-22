import { useState } from "react";
import "./App.css";

const getRandomColor = () => {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColorGuessingGame = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setTargetColor(getRandomColor());
      setMessage("Correct! Well done.");
    } else {
      setMessage("Wrong! Try again.");
    }
  };

  const resetGame = () => {
    setTargetColor(getRandomColor());
    setMessage("");
    setScore(0);
  };

  return (
    <div className="game-container">
      <h2 data-testid="gameInstructions" className="gameInstructions">
        Guess the correct color!
      </h2>
      <div
        className="color-box"
        data-testid="colorBox"
        style={{ backgroundColor: targetColor }}
      ></div>

      <p data-testid="gameStatus" className="gameStatus">
        {message}
      </p>
      <div className="options">
        {colors.map((color) => (
          <button
            className="colors"
            key={color}
            data-testid="colorOption"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
          ></button>
        ))}
      </div>

      <p data-testid="score" className="score">
        Score: {score}
      </p>
      <button
        className="button"
        data-testid="newGameButton"
        onClick={resetGame}
      >
        New Game
      </button>
    </div>
  );
};

export default ColorGuessingGame;
