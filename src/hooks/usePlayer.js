import { useState, useCallback } from "react";
import { checkCollision, STAGE_WIDTH } from "../gameHelper";
import { randomTetrominos, TETROMINOS } from "../tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (tetromino, dir) => {
    //transpose rows to cols
    const rotated = tetromino.map((_, i) => tetromino.map((col) => col[i]));
    // reverse each rows
    if (dir > 0) return rotated.map((r) => r.reverse());
    return rotated.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = { ...player };
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((p) => ({
      ...p,
      pos: {
        x: (p.pos.x += x),
        y: (p.pos.y += y),
      },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetrominos().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
