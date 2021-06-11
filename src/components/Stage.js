import React from "react";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";

const Stage = ({ stage, pauseGame, gameOver }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage?.map((row) => row.map((cell, i) => <Cell key={i} type={cell[0]} />))}
    {pauseGame && <div className="gameStatusText">Game Paused !!</div>}
    {gameOver && <div className="gameStatusText">Game Over :(</div>}
  </StyledStage>
);
export default Stage;
