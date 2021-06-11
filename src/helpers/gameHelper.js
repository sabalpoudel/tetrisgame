export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const SMALL_STAGE = 4;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
export const smallStage = Array.from(Array(SMALL_STAGE), () =>
  new Array(SMALL_STAGE).fill(0)
);

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player?.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        //check we are on actual tetromino cell
        if (
          !stage[y + player.pos.y + moveY] || // check our move is inside the game area width(y) we do not go through bottom
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || // check move is inside game area width(x)
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear" // check cell we are moving to is not clear
        ) {
          return true;
        }
      }
    }
  }
};

export const findCollisionIndex = (player, stage) => {
  for (let i = 1; i <= STAGE_HEIGHT; ++i) {
    let collideAt = checkCollision(player, stage, { x: 0, y: i });
    if (collideAt) return i - 1;
  }
};
