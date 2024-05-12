import "./Score.scss";
import greenGauge from "../../assets/images/green-gauge.png";

const greennessScore = 73;

function Score() {
  return (
    <section className="score-section">
      <div className="score-container">
        <h2 className="score-text">GREENNESS SCORE</h2>
        <h3 className="score-sub-text">
          This score is based on the{" "}
          <a
            href="https://octopus.energy/smart/greener-days/"
            target="_blank"
            className="greener-days"
          >
            Greener Days
          </a>{" "}
          you used last week
        </h3>
        <div className="score-number-container pulse-animate">
          <h2 className="score-number">{greennessScore}</h2>
        </div>
        <h3 className="score-sub-text">
          Use your power on{" "}
          <a
            href="https://octopus.energy/smart/greener-days/"
            target="_blank"
            className="greener-days"
          >
            Greener Days
          </a>{" "}
          to improve your{" "}
          <span className="greenness-score-text">GREENNESS SCORE</span>
        </h3>
        <img src={greenGauge} className="score-img" />
      </div>
    </section>
  );
}

export default Score;
