const MovieCard = ({ users, usersWhoLikedMovie, movieInfo }) => {
  return (
    <li key={movieInfo.id}>
      <h2>{movieInfo.name}</h2>
      <h3>Liked By:</h3>
      {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
        <p>None of the current users liked this movie.</p>
      ) : (
        <ul>
          {usersWhoLikedMovie &&
            usersWhoLikedMovie.map((userId) => {
              return <li key={userId}>{users[userId].name}</li>;
            })}
        </ul>
      )}
    </li>
  );
};

export default MovieCard;
