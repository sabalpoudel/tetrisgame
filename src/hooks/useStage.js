import { useState, useEffect } from "react";
import { createStage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (p) => {
      //first flush the stage
      const newStage = p.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      // then draw the tetromino
      player.tetromino.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell !== 0) {
            newStage[i + player.pos.y][j + player.pos.x] = [
              cell,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      if (player.collided) resetPlayer();

      return newStage;
    };
    setStage((p) => updateStage(p));
    return () => {};
  }, [player, resetPlayer]);
  return [stage, setStage];
};
