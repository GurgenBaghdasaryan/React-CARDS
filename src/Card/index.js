import React from "react";
import { StyledCard, StyledButton } from "./style";

const Card = ({ number, index, deleteFromNumer }) => {
  return (
    <>
      <ul key={index}>
        <StyledCard>
          <StyledButton type="checkbox" onClick={() => deleteFromNumer(index)}>
            x
          </StyledButton>
          <div style={{ marginTop: "45px" }}>{number}</div>
        </StyledCard>
      </ul>
    </>
  );
};

export default Card;
