import corgi from "./corgi.jpg";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <button type="button" onClick={handleClick}>
        Like
      </button>
      <p>Amount of likes: {likes}</p>
    </div>
  );
};

export default App;
