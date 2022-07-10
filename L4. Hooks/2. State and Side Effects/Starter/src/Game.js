import { useState, useEffect } from "react";

const Game = (props) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  const checkAnswer = (answer) => {
    const correctAnswer = value1 + value2 + value3;
    if (correctAnswer === proposedAnswer && answer === "true") {
      return true;
    }
    if (correctAnswer !== proposedAnswer && answer === "false") {
      return true;
    }
    return false;
  };

  // Calls refresh and set values when the component has been mounted
  useEffect(() => {
    refreshQuestion();
  }, []);

  const handleAnswer = (event) => {
    refreshQuestion();
    console.log("refreshed by handle answer");
    const answer = event.target.name;
    const checkedAnswer = checkAnswer(answer);

    props.handleAnswer(checkedAnswer);
  };

  const refreshQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
    setValue1(value1);
    setValue2(value2);
    setValue3(value3);
    setProposedAnswer(proposedAnswer);
  };

  return (
    <div>
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button onClick={handleAnswer} name="true">
        True
      </button>
      <button onClick={handleAnswer} name="false">
        False
      </button>
    </div>
  );
};

export default Game;
