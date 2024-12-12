// import { useState } from 'react';

/* eslint-disable react/prop-types */
function Player({ player, activePlayer, currentScore, score }) {
  return (
    <>
      <section
        className={`player ${player === activePlayer ? 'player--active' : ''} ${score[player] >= 100 ? 'player--winner' : ''}`}
      >
        <h2 className="name">Player {player === 0 ? 1 : 2}</h2>
        <p className="score">{score[player]}</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score">
            {activePlayer === player ? currentScore : 0}
          </p>
        </div>
      </section>
    </>
  );
}

export default Player;
