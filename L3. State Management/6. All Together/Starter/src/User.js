const User = ({ user, showGamesPlayed }) => {
  return (
    <li className="user" key={user.username}>
      <p>Username: {user.userName}</p>
      <p>
        Numbers of games played: {showGamesPlayed ? user.numGamesPlayed : "*"}
      </p>
    </li>
  );
};

export default User;
