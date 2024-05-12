import "./Ranking.scss";
//import GreenScore from "../Score/Score";

function Ranking({ greennessScore }) {
  return (
    <div className="ranks__container">
      <div className="ranking__container">
        <div className="rankings"></div>
        <div className="ranks">
          <div className="score__number-container">
            <h2 className="score__number">{greennessScore}</h2>
          </div>
        </div>
        <div className="rankings">
          <p>Out of 1,400,000 national users</p>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
