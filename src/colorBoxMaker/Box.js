import React from "react";
import "./Box.css";

const Box = ({ color="red", width=100, height=100, value, removeBox }) => {

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
