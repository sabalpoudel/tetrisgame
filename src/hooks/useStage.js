import { useState, useEffect } from "react";
import { createStage } from "../helpers/gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage) =>
      newStage.reduce((acc, row) => {
        if (row.findIndex((c) => c[0] === 0) === -1) {
          setRowsCleared((p) => p + 1);
          acc.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return acc;
        }
        acc.push(row);
        return acc;
      }, []);
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
      if (player.collided) {
        resetPlayer();

        return sweepRows(newStage);
      }
      return newStage;
    };
    setStage((p) => updateStage(p));
    return () => {};
  }, [player, resetPlayer]);
  return [stage, setStage, rowsCleared];
};
