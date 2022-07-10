import { useState } from "react";
import User from "./User";

const UserList = ({ users }) => {
  const [showGamesPlayed, setShowGamesPlayed] = useState(true);
  const toggleGamesPlayedPanel = () => {
    setShowGamesPlayed(!showGamesPlayed);
  };

  const gamesPlayedButton = (
    <div>
      <button className="smallButton" onClick={toggleGamesPlayedPanel}>
        {showGamesPlayed ? "hide " : "show "}
        the Number of Games Played
      </button>
    </div>
  );
  return (
    <div>
      <h1>Users</h1>
      {users && users.length > 0 ? gamesPlayedButton : ""}
      <ol>
        {users.map((user) => {
          return <User user={user} showGamesPlayed={showGamesPlayed} />;
        })}
      </ol>
    </div>
  );
};

export default UserList;
