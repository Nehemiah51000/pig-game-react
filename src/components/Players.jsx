/* eslint-disable react/prop-types */
// import { useState } from 'react';
import Player from './player';

function Players({ diceRoll, activePlayer, currentScore, score }) {
  return (
    <>
      <Player
        player={0}
        diceRoll={diceRoll}
        activePlayer={activePlayer}
        currentScore={currentScore}
        score={score}
      />

      <Player
        player={1}
        diceRoll={diceRoll}
        activePlayer={activePlayer}
        currentScore={currentScore}
        score={score}
      />
    </>
  );
}

export default Players;
