import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
  position: relative;
  .gameStatusText {
    left: 0;
    right: 0;
    top: 45%;
    width: 100%;
    margin: auto;
    max-width: 25vw;
    padding: 1.5rem 0;
    color: lightgrey;
    font-size: 1.5rem;
    text-align: center;
    position: absolute;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    background-color: #ff000070;
  }
`;
