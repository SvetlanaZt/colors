import React, { useEffect, useState } from "react";
import Color from "./Color";

const Colors = () => {
  console.log("Colors");
  const colors = ["red", "blue", "green", "yellow"];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [next, setNext] = useState(2);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    setNext(currentIndex === colors.length - 1 ? 0 : currentIndex + 1);
    setPrev(currentIndex === 0 ? colors.length - 1 : currentIndex - 1);
  }, [currentIndex, colors.length]);
  return (
    <div
      style={{
        border: "black solid 1px ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        padding: "10px",
      }}
    >
      <Color
        setCurrentIndex={setCurrentIndex}
        index={prev}
        colors={colors}
        width={"100px"}
        height={"100px"}
      />
      <Color
        setCurrentIndex={setCurrentIndex}
        index={currentIndex}
        colors={colors}
        width={"200px"}
        height={"200px"}
      />
      <Color
        setCurrentIndex={setCurrentIndex}
        index={next}
        colors={colors}
        width={"100px"}
        height={"100px"}
      />
    </div>
  );
};
export default Colors;
