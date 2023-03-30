import React from "react";

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleChange(e) {
    const value = e.target.value;

    setGuess(value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (guess.length !== 5) {
      return;
    }

    handleGuess(guess);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
