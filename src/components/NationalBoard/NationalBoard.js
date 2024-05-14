import "./NationalBoard.scss";
import RankIcon from "../../assets/icons/toggle-arrow-right-svgrepo-com.svg";

function NationalBoard() {
  return (
    <div className="ranks__container">
      <div className="ranking__container">
        {/* <div className="rankings_top"></div> */}
        <div className="ranks">
          <div className="national__rank">
            <img src={RankIcon} className="rank__icon" alt="Rank Icon" />
            <p>1148</p>
          </div>

          <div className="user">
            <h2>Cameron</h2>
            <p>London, UK</p>
          </div>

          <div className="score__number-container">
            <h2 className="score__number">73</h2>
          </div>
        </div>
        <div className="rankings">
          <p>Out of 1,400,000 national users</p>
        </div>
      </div>
    </div>
  );
}

export default NationalBoard;
