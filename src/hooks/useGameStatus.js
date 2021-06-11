import { useState, useEffect, useCallback } from "react";
const linePoints = [40, 100, 300, 1200];

export const useGameStatus = (rowsCleared) => {
  const [rows, setRows] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);

  const calcScore = useCallback(() => {
    // check if score
    if (rowsCleared > 0) {
      setScore((p) => p + linePoints[rowsCleared - 1] * (level + 1));
      setRows((p) => p + rowsCleared);
    }
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
