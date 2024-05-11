import "./Score.scss";

const greennessScore = 73;

function Score() {
  return (
    <section className="score-section">
      <div className="score-container">
        <div className="score-number-container">
          <h2 className="score-number">{greennessScore}</h2>
        </div>
        <h2 className="score-text">GREENNESS SCORE</h2>
      </div>
    </section>
  );
}

export default Score;
