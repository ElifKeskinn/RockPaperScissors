import React from 'react';

function GameResult({ playerChoice, cpuChoice, result, onPlayAgain }) {
  return (
    <div className="game-pick active">
      <div className="you-picked">
        <h1>YOU PICKED</h1>
        <p>
          <span>
            <img src={`assets/img/${playerChoice}.svg`} alt={playerChoice} />
          </span>
        </p>
      </div>

      <div className="winscreen">
        <h2>{result}</h2>
        <button className="playagain" onClick={onPlayAgain}>
          PLAY AGAIN
        </button>
      </div>

      <div className="house-picked">
        <h1>THE HOUSE PICKED</h1>
        <p>
          <span>
            <img src={`assets/img/${cpuChoice}.svg`} alt={cpuChoice} />
          </span>
        </p>
      </div>
    </div>
  );
}

export default GameResult;
