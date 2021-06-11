import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import ActionButton from "./ActionButton";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";
import { checkCollision, createStage } from "../gameHelper";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";
import DisplayControls from "./DisplayControls";
import UpcomingTetris from "./UpcomingTetris";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [pauseGame, setPauseGame] = useState(false);

  const [
    player,
    updatePlayerPos,
    resetPlayer,
    playerRotate,
    upComingTetromino,
  ] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    console.log({ dir });
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //Reset Everything
    setStage(createStage());
    setDropTime(1000 / (level + 1) + 200);
    resetPlayer();
    setPauseGame(false);
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    //increase level for every 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((p) => p + 1);
      // increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 }))
      updatePlayerPos({ x: 0, y: 1, collided: false });
    else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(false);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    console.log("keyUp", keyCode);
    if (keyCode === 40) {
      //uptArrow
      setDropTime(1000 / (level + 1) + 200);
    }
  };
  const dropPlayer = () => {
    console.log("dropPlayer");
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    console.log("move", keyCode);
    if (!gameOver && !pauseGame) {
      if (keyCode === 37) {
        //leftArrow
        movePlayer(-1);
      } else if (keyCode === 39) {
        //rightArrow
        movePlayer(1);
      } else if (keyCode === 40) {
        //downArrow
        dropPlayer(1);
      } else if (keyCode === 38) {
        //upArrow
        playerRotate(stage, 1);
      }
    }
    if (keyCode === 13) {
      callPauseGame();
    }
  };

  useInterval(() => {
    !gameOver && drop();
  }, dropTime);

  const callPauseGame = () => {
    console.log("callPauseGame");
    if (pauseGame) {
      setPauseGame(false);
      setDropTime(1000 / (level + 1) + 200);
    } else {
      setDropTime(null);
      setPauseGame(true);
    }
  };
  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyUp={(e) => !gameOver && !pauseGame && keyUp(e)}
      onKeyDown={(e) => move(e)}
    >
      <StyledTetris>
        <aside>
          <ActionButton
            text={pauseGame ? "|> Resume Game" : "II Pause Game"}
            callback={callPauseGame}
            disabled={gameOver || player.tetromino.length === 1}
          />
          <UpcomingTetris tetromino={upComingTetromino} />
          <DisplayControls />
        </aside>
        <Stage stage={stage} pauseGame={pauseGame} gameOver={gameOver} />

        <aside>
          {/* {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"} />
          ) : ( */}
          <div>
            <Display text={`Score ${score}`} />
            <Display text={`Rows ${rows}`} />
            <Display text={`Level ${level}`} />
          </div>
          {/* )} */}
          <ActionButton
            text={
              player.tetromino.length === 1 || gameOver
                ? "Start Game"
                : "Reset Game"
            }
            callback={startGame}
          />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
export default Tetris;
