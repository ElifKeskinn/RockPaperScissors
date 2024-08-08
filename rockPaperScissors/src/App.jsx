import React, { useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Game from './components/Game';
import GameResult from './components/GameResult';

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isGameActive, setIsGameActive] = useState(true);

  const choices = ["rock", "paper", "scissors"];

  const playGame = (choice) => {
    const randomChoice = Math.floor(Math.random() * 3);
    const cpu = choices[randomChoice];
    setPlayerChoice(choice);
    setCpuChoice(cpu);

    if (choice === cpu) {
      setResult("It's a tie!");
    } else if (
      (choice === "rock" && cpu === "scissors") ||
      (choice === "paper" && cpu === "rock") ||
      (choice === "scissors" && cpu === "paper")
    ) {
      setResult("You Win!");
      setScore(score + 1);
    } else {
      setResult("You Lose!");
    }

    setIsGameActive(false);
  };

  const playAgain = () => {
    setPlayerChoice(null);
    setCpuChoice(null);
    setResult(null);
    setIsGameActive(true);
  };

//reset 
  const handleReset = () => {
    setScore(0); 
  };

  return (
    <div className="container">
      <Scoreboard score={score} />
      {isGameActive ? (
        <Game onPlay={playGame} onReset={handleReset} />
      ) : (
        <GameResult
          playerChoice={playerChoice}
          cpuChoice={cpuChoice}
          result={result}
          onPlayAgain={playAgain}
        />
      )}
    </div>
  );
}

export default App;
