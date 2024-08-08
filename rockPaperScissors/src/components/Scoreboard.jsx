import React from 'react';

function Scoreboard({ score }) {
  return (
    <div className="scoreboard-container">
      <div className="scoreboard-text">
        <h2>
          ROCK<br />
          PAPER <br />
          SCISSORS
        </h2>
      </div>
      <div className="scoreboard">
        <p>SCORE</p>
        <h3>{score}</h3>
      </div>
    </div>
  );
}

export default Scoreboard;
