/* eslint-disable react/prop-types */
function Player({ player }) {
  // function handleGetCurrentScore() {
  //   return currentScore + diceCount;
  // }
  return (
    <section className={`player ${player === 0 ? 'player--active' : ''}`}>
      <h2 className="name">Player {player === 0 ? 1 : 2}</h2>
      <p className="score">{player === 0 ? 43 : 24}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">0</p>
      </div>
    </section>
  );
}

export default Player;
