import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import { smallStage } from "../helpers/gameHelper";

const StyledUpcomingTetris = styled.div`
  width: 100%;
  color: #999;
  padding: 5px;
  display: flex;
  font-size: 1rem;
  min-height: 30px;
  margin-bottom: 5px;
  align-items: center;
  box-sizing: border-box;
  padding-inline-start: 0;
  font-family: Pixel, Arial, Helvetica, sans-serif;
`;

const StyledSmallStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(4vw / ${(props) => props.width})
  );
  width: 100%;
  grid-gap: 1px;
  max-width: 4vw;
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  margin-left: auto;
  background-color: "#000";
`;

const makingHeight4 = (arr) => {
  let tempArr = [...arr];
  if (tempArr.length === 2) {
    tempArr.unshift([0, 0]);
    tempArr.push([0, 0]);
  } else if (tempArr.length === 3) {
    tempArr.unshift([0, 0, 0]);
  }
  return tempArr;
};
const UpcomingTetris = ({ tetromino }) => {
  let t = makingHeight4(tetromino);

  return (
    <StyledUpcomingTetris>
      Upcoming
      <StyledSmallStage width={4} height={4}>
        {smallStage?.map((row, i) =>
          row.map((_, j) => {
            return <Cell key={`${i}-${j}`} type={t?.[i]?.[j] || 0} />;
          })
        )}
      </StyledSmallStage>
    </StyledUpcomingTetris>
  );
};
export default React.memo(UpcomingTetris);
