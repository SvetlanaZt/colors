import React from "react";
import { FC } from "react";

interface Event {
  colors: string[];
  setCurrentIndex: Function;
  index: number;
  width: string;
  height: string;
}

const Color: FC<Event> = ({
  setCurrentIndex,
  index,
  colors,
  width,
  height,
}) => {
  console.log("Color");
  return (
    <div
      style={{
        display: "inline-block",
        width: width,
        height: height,
        marginRight: "10px",
        backgroundColor: colors[index],
      }}
      onClick={() => setCurrentIndex(index)}
    />
  );
};
export default React.memo(Color);
