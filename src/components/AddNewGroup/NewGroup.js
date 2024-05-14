import "./NewGroup.scss";
//import RankIcon from "../../assests/icons/toggle-arrow-right-svgrepo-com.svg";

function NewGroup() {
  return (
    <div className="ranks__container">
      <div className="ranking__container">
        {/* <div className="rankings_top"></div> */}
        <div className="ranks">
          {/* <div className="national__rank">
            <img src={RankIcon} className="rank__icon" alt="Rank Icon" />
            <p>500</p>
          </div> */}

          <div className="user">
            <h2>➕ CREATE A NEW GROUP</h2>
            {/* <p>London, UK</p> */}
          </div>

          {/* <div className="score__number-container">
            <h2 className="score__number">73</h2>
          </div> */}
        </div>
        <div className="rankings">
          <p>Start a green trend with your friends</p>
        </div>
      </div>
    </div>
  );
}

export default NewGroup;
