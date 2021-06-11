import React from "react";
import { TETROMINOS } from "../helpers/tetrominos";
import { StyledCell } from "./styles/StyledCell";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);
export default React.memo(Cell);
