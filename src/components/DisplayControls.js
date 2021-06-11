import React from "react";
import { StyledDisplayControls } from "./styles/StyledDisplay";

const DisplayControls = () => (
  <StyledDisplayControls>
    <p>Controls</p>
    <ul>
      <li>Pause : Enter</li>
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
      <li>
        Full Drop :<br /> Space bar
      </li>
    </ul>
  </StyledDisplayControls>
);
export default DisplayControls;
