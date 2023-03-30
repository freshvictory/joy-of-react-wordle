import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    console.log({ guess });
    setGuesses([...guesses, guess]);
  }

  const checkedGuesses = guesses.map(checkGuess.bind(null, answer));

  const gameOver =
    guesses.at(-1) === answer
      ? "win"
      : guesses.length === NUM_OF_GUESSES_ALLOWED
      ? "lose"
      : false;

  return (
    <>
      <GuessResults guesses={checkedGuesses} />
      <GuessInput handleGuess={handleGuess} />
      {gameOver === "win" && <WinBanner numGuesses={guesses.length} />}
      {gameOver === "lose" && <LoseBanner answer={answer} />}
    </>
  );
}

function WinBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  );
}

function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Game;
