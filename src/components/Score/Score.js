import "./Score.scss";
import greenGauge from "../../assets/images/green-gauge.png";

const greennessScore = 73;

function Score() {
  return (
    <section className="score-section">
      <div className="score-container">
        <div className="score-number-container">
          <h2 className="score-number">{greennessScore}</h2>
        </div>
        <h2 className="score-text">YOUR GREENNESS SCORE</h2>
        <img src={greenGauge} className="score-img" />
      </div>
    </section>
  );
}

export default Score;
