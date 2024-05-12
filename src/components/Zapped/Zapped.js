import "./Zapped.scss";
import octoBathe from "../../assets/images/Octo-bathe.png";

const greennessScore = 73;

function Zapped() {
  return (
    <section className="zapped-section">
      <div className="zapped-container">
        <h2 className="zapped-title">ZAPPED</h2>
        <h3 className="zapped-sub-title">YOUR WEEK AT OCTOPUS SUMMED UP</h3>
        <p className="stat">
          YOU USED <span className="stat-special">70kWh</span> OF POWER
        </p>
        <p className="stat">
          THIS IS EQUIVALENT TO RUNNING A WASHING MACHINE{" "}
          <span className="stat-special">47</span> TIMES
        </p>
        <div className="divider"></div>
        <p className="stat">
          YOU SPENT <span className="stat-special">£35.03</span> ON POWER
        </p>
        <p className="stat">
          THIS IS EQUIVALENT TO <span className="stat-special">2</span> PUB
          LUNCHES
        </p>
        <img className="octo-pic" src={octoBathe} />
        <p className="stat">
          YOU ACHEIVED A <span className="stat-special">{greennessScore}</span>
          <a className="greenness-score" href="/">
            Greenness Score
          </a>
        </p>
        <p className="stat">
          YOU EARNED <span className="stat-special">8</span>
          <a
            className="octoplus"
            href="https://octopus.energy/octoplus/"
            target="_blank"
          >
            Octoplus Points
          </a>
        </p>
        <div className="divider"></div>
        <p className="stat">
          LAST WEEK YOU COULD HAVE SAVED{" "}
          <span className="stat-special">£8.05</span>
        </p>
        <p className="stat">
          AND <span className="stat-special">12 LITRES</span> OF CO2 EMISSIONS
        </p>
        <p className="stat">
          BY USING{" "}
          <a
            href="https://octopus.energy/smart/greener-days/"
            target="_blank"
            className="greener-days-zapped"
          >
            Greener Days
          </a>
        </p>
      </div>
    </section>
  );
}

export default Zapped;
