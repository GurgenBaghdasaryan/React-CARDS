import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./footer";
import "./App.css";

function App() {
  const [number, setNumbers] = useState([]);

  const deleteFromNumer = (index) => {
    const newArr = [...number];
    newArr.splice(index, 1);
    setNumbers(newArr);
    localStorage.setItem("num", JSON.stringify(newArr));
  };

  const Clear = () => {
    const newArr = [...number];
    newArr.splice(0);
    setNumbers(newArr);
    localStorage.setItem("num", JSON.stringify(newArr));
  };

  const addCard = () => {
    const newArr = [];
    const random = Math.floor(Math.random() * 101);
    newArr.push(...number, random);
    setNumbers(newArr);
    localStorage.setItem("num", JSON.stringify(newArr));
  };

  const sortCards = () => {
    const newArr = [...number];
    newArr.sort((a, b) => b - a);
    setNumbers(newArr);
    localStorage.setItem("num", JSON.stringify(newArr));
  };

  useEffect(() => {
    const row = JSON.parse(localStorage.getItem("num"));
    setNumbers(row);
  }, []);

  return (
    <>
      <div>
        <Header addCard={addCard} sortCards={sortCards} Clear={Clear} />
        <div className="container content">
          {number.map((num, index) => (
            <Card
              deleteFromNumer={deleteFromNumer}
              number={num}
              index={index}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
