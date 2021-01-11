import React from "react";
import { StyledButton, StyledDiv } from "./styles";

const Add = ({ addCard, sortCards, Clear }) => {
  return (
    <StyledDiv>
      <StyledButton type="checkbox" onClick={Clear}>
        Clear
      </StyledButton>
      <StyledButton type="checkbox" onClick={addCard}>
        Added Cards
      </StyledButton>
      <StyledButton type="checkbox" onClick={sortCards}>
        Sort Cards
      </StyledButton>
    </StyledDiv>
  );
};

export default Add;
