import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;

export const StyledDisplayControls = styled.div`
  width: 100%;
  color: #999;
  padding: 5px;
  background: #000;
  min-height: 30px;
  font-size: 1rem;
  align-items: center;
  line-height: 1.5;
  border-radius: 20px;
  border: 4px solid #333;
  box-sizing: border-box;
  padding-inline-start: 0;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  p {
    padding-left: 25px;
  }
  li {
    margin-bottom: 5px;
  }
  .scores {
    text-align: center;
    border-top: 1px dashed #333;
    border-bottom: 1px dashed #333;
    padding: 10px 0;
  }
`;
