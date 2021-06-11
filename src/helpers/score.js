export const getHighScores = () => localStorage.getItem("tetrisScore");
export const setHighScores = (arr) =>
  localStorage.setItem("tetrisScore", JSON.stringify(arr));

export const checkAndUpdateScore = (score) => {
  let scores = JSON.parse(getHighScores());
  scores.push(score);
  scores.sort((a, b) => b - a).splice(-1);
  setHighScores(scores);
};
