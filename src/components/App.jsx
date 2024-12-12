import { useState } from 'react';
import Button from './Button';
import Players from './players';

function App() {
  const [dice, setDice] = useState(1);
  const [activePlayer, setActivePlayer] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [score, setScore] = useState([0, 0]);
  const [disabled, setDisabled] = useState(false);

  //handles dice rolls
  function handleRoll() {
    const newDice = Math.floor(Math.random() * 6 + 1);

    //set the value of dice roll
    setDice(newDice);

    //handle switching of the the active player
    if (newDice === 1) {
      setActivePlayer(prevPlayer => (prevPlayer === 0 ? 1 : 0));
      setCurrentScore(0);
    }

    // handle adding of the current score to active player
    setCurrentScore(curScore => (newDice === 1 ? 0 : curScore + newDice));
  }

  //handles holding score
  function handleHoldScore() {
    //maps the held scores to a new score array
    const newScore = score.map((s, i) => {
      if (i === activePlayer) {
        return (s += currentScore);
      }
      return s;
    });

    //changes the active player
    setActivePlayer(prevPlayer => (prevPlayer === 0 ? 1 : 0));
    // sets current score to zero
    setCurrentScore(0);

    //disables buttons when one player wins the game
    if (newScore[activePlayer] >= 100) {
      setDisabled(true);
    }

    //sets the new array for the score array
    setScore(newScore);
  }

  //handles resetting of the game
  function handleResetGame() {
    setScore([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setDice(1);
    setDisabled(false);
  }
  return (
    <main>
      <Players
        diceRoll={dice}
        activePlayer={activePlayer}
        currentScore={currentScore}
        score={score}
      />
      <img src={`../public/dice-${dice}.png`} alt="dice" className="dice" />
      <Button type="new" onClick={handleResetGame}>
        🔄 New game
      </Button>
      <Button onClick={handleRoll} type="roll" disabled={disabled}>
        🎲 Roll dice
      </Button>
      <Button type="hold" disabled={disabled} onClick={handleHoldScore}>
        📥 Hold
      </Button>
    </main>
  );
}

export default App;
