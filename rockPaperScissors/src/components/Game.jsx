import React from 'react';

function Game({ onPlay , onReset }) {
  return (
    <div className="game">
      <div className="gamebuttons">
        <div className="gamebuttons-item">
          <button className="paper" onClick={() => onPlay('paper')}>
            <img src="assets/img/paper.svg" alt="paper" />
          </button>
          <button className="scissors" onClick={() => onPlay('scissors')}>
            <img src="assets/img/scissors.svg" alt="scissors" />
          </button>
        </div>
        <div className="rockdiv">
          <button className="rock" onClick={() => onPlay('rock')}>
            <img src="assets/img/rock.svg" alt="rock" />
          </button>
        </div>
      </div>
      {/*içimden reset butonu eklemek geldi*/}
      <div className="reset-button">
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}


export default Game;
