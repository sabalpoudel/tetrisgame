import React from "react";
import { StyledActionButton } from "./styles/StyledActionButton";

const ActionButton = ({ callback, text, disabled }) => {
  return (
    <StyledActionButton
      onClick={(e) => !disabled && callback(e)}
      disabled={disabled}
    >
      {text}
    </StyledActionButton>
  );
};
export default ActionButton;
