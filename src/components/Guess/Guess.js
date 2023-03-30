import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <li className="guess">
      {range(5).map((index) => (
        <span key={index} className={`cell ${guess?.[index].status || ""}`}>
          {guess?.[index].letter}
        </span>
      ))}
    </li>
  );
}

export default Guess;
