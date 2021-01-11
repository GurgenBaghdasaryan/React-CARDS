import React from "react";
import Add from "../Add";

const Header = ({ addCard, sortCards, Clear }) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Add addCard={addCard} sortCards={sortCards} Clear={Clear} />
      </div>
    </>
  );
};

export default Header;
