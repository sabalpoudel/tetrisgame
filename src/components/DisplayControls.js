import React, { useEffect, useState } from "react";
import { getHighScores, setHighScores } from "../helpers/score";
import { StyledDisplayControls } from "./styles/StyledDisplay";

const DisplayControls = () => (
  <StyledDisplayControls>
    <p>Controls</p>
    <ul>
      <li>Pause : Enter</li>
      <li>
        Move right :<br /> Right Arrow{" "}
      </li>
      <li>
        Move down :<br /> Down Arrow
      </li>
      <li>
        Move left :<br /> Left Arrow
      </li>
      <li>
        Rotate :<br /> Up Arrow
      </li>
      <li>
        Full Drop :<br /> Space bar
      </li>
    </ul>
  </StyledDisplayControls>
);
export default DisplayControls;
const initScore = [2500, 1250, 625, 300, 0];
// const initScore = [2000, 1000, 25, 0, 0];
export const HighScore = ({ gameOver }) => {
  const [scores, setScores] = useState(initScore);

  useEffect(() => {
    const storedScore = getHighScores();
    if (storedScore) setScores(JSON.parse(storedScore));
    else setHighScores(initScore);
  }, [gameOver]);

  return (
    <StyledDisplayControls>
      <div className="scores">Top 5 Scores</div>
      {scores.map((i, j) => (
        <div key={j} className="scores">
          Score {j + 1}: {i.toString().padStart(6, "0")}
        </div>
      ))}
    </StyledDisplayControls>
  );
};
