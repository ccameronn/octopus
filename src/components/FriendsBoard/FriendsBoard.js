import "./FriendsBoard.scss";
import RankIcon from "../../assets/icons/toggle-arrow-right-svgrepo-com.svg";

function FriendsBoard() {
  return (
    <div className="ranks__container">
      <div className="ranking__container">
        {/* <div className="rankings_top"></div> */}
        <div className="ranks">
          <div className="national__rank">
            <img src={RankIcon} className="rank__icon" alt="Rank Icon" />
            <p>50</p>
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
          <p>Out of your group of 67 - 'My Friends'</p>
        </div>
      </div>
    </div>
  );
}

export default FriendsBoard;
