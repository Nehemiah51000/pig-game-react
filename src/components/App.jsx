import { useState } from 'react';
import Button from './Button';
import Players from './players';

function App() {
  const [dice, setDice] = useState(1);

  function handleRoll() {
    setDice(Math.floor(Math.random() * 6 + 1));
  }

  return (
    <main>
      <Players />
      <img src={`../public/dice-${dice}.png`} alt="dice" className="dice" />
      <Button type="new">🔄 New game</Button>
      <Button onClick={handleRoll} type="roll">
        🎲 Roll dice
      </Button>
      <Button type="hold">📥 Hold</Button>
    </main>
  );
}

export default App;
