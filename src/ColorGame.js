import { useState } from "react";

const getRandomColor = () => {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColorGuessingGame = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Guess the correct color!");
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setMessage("Correct! Well done.");
    } else {
      setMessage("Wrong! Try again.");
    }
  };

  const resetGame = () => {
    setTargetColor(getRandomColor());
    setMessage("Guess the correct color!");
  };

  return (
    <div className="game-container">
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>
      <div
        className="color-box"
        data-testid="colorBox"
        style={{ backgroundColor: targetColor }}
      ></div>
      <div className="options">
        {colors.map((color) => (
          <button
            key={color}
            data-testid="colorOption"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
          ></button>
        ))}
      </div>
      <p data-testid="gameStatus">{message}</p>
      <p data-testid="score">Score: {score}</p>
      <button data-testid="newGameButton" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}

export default ColorGuessingGame;