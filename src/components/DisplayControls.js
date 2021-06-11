import React from "react";
import { StyledDisplayControls } from "./styles/StyledDisplay";

const DisplayControls = () => (
  <StyledDisplayControls>
    <p>Controls</p>
    <ul>
      <li>
        Move right :<br /> Right Arrow{" "}
      </li>
      <li>
        Move down :<br /> Down Arrow
      </li>
      <li>
        Move left :<br /> Left Arrow
      </li>
      <li>
        Rotate :<br /> Up Arrow
      </li>
    </ul>
  </StyledDisplayControls>
);
export default DisplayControls;
