const Score = ({ correctAnswers, numQuestions }) => {
  return (
    <p className="text">
      Your Score: {correctAnswers}/{numQuestions}
    </p>
  );
};

export default Score;
