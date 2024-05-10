import React from "react";
import "./Box.css";

const Box = ({ color, width, height, value, removeBox }) => {

  function handleRemove(e) {
    removeBox(value);
  }

  return (
    <>
      <div
        onClick={handleRemove}
        className="Box"
        style={
        {
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`
        }}><div className="Box-inner">X</div>
      </div>
    </>
  )
};

export default Box;
