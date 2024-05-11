import "./Zapped.scss";
import octoBathe from "../../assets/images/Octo-bathe.png";

const greennessScore = 73;

function Zapped() {
  return (
    <section className="zapped-section">
      <div className="zapped-container">
        <h2 className="zapped-title">ZAPPED</h2>
        <h3>LAST WEEK</h3>
        <p>
          YOU USED <span>70kWh</span> OF POWER
        </p>
        <p>
          THIS IS EQUIVALENT TO RUNNING A WASHING MACHINE <span>47</span> TIMES
        </p>
        <div className="divider"></div>
        <p>
          YOU SPENT <span>£35.03</span> ON POWER
        </p>
        <p>
          <p>
            THIS IS EQUIVALENT TO <span>2</span> PUB LUNCHES
          </p>
        </p>
        <div className="divider"></div>
        <p>
          YOU EARNED
          <a href="https://octopus.energy/octoplus/" target="_blank">
            X OCTOPLUS POINTS!
          </a>
        </p>
        <div className="divider"></div>
        <img src={octoBathe} />
        <div className="divider"></div>
        <p>
          IF YOU USED MORE <span>GREENER DAYS</span> LAST WEEK YOU COULD HAVE
          SAVED £X AND X LITRES OF CO2 IN EMISSIONS
        </p>
        <div className="divider"></div>
      </div>
    </section>
  );
}

export default Zapped;
