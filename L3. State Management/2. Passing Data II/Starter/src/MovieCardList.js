import MovieCard from "./MovieCard";

const MovieCardList = ({ usersByMovie, movies, users }) => {
  const movieCards = Object.keys(movies).map((id) => {
    return (
      <MovieCard
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    );
  });

  return <ul>{movieCards}</ul>;
};

export default MovieCardList;
