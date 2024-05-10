import React from "react";
import "./Box.css";

const Box = ({color, width, height, key}) => {

  return (
    <>
      <div className="Box" style={
        {
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`
        }}>
      </div>
    </>
  )
};

export default Box;
