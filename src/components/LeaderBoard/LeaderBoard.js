import "./LeaderBoard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import NationalBoard from "../NationalBoard/NationalBoard";
import LocalBoard from "../LocalBoard/LocalBoard";
import FriendsBoard from "../FriendsBoard/FriendsBoard";
import NewGroup from "../AddNewGroup/NewGroup";

function LeaderBoard() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard__content">
        <div className="leaderboard__container">
          <div className="leaderboard__title">
            <h1>Leaderboard</h1>
          </div>
          <div className="toggle__container">
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="list__group"
            >
              <option value="">Select an option</option>
              <option value="national">
                <Link to="/national">National</Link>
              </option>
              <option value="local">Local</option>
              <option value="friends">My Friends</option>
              <option value="newGroup">+ New Group</option>
            </select>
          </div>
        </div>
      </div>
      {selectedOption && (
        <div>
          {selectedOption === "national" && <NationalBoard />}
          {selectedOption === "local" && <LocalBoard />}
          {selectedOption === "friends" && <FriendsBoard />}
          {selectedOption === "newGroup" && <NewGroup />}
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
