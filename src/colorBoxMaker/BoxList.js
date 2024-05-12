import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import Box from "./Box";


const BoxList = () => {

  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    newBox.color = newBox.color === "" ? "red" : newBox.color;
    newBox.width = newBox.width === "" || newBox.width < 10 ? 100 : newBox.width;
    newBox.height = newBox.height === "" || newBox.height < 10 ? 100 : newBox.height;
    setBoxes(boxes => [...boxes, newBox]);
  };

  function removeBox(id) {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  return (
    <>
      <h2>Color Box Maker</h2>
      <NewBoxForm addBox={addBox} />
      {boxes.map(box =>
        <Box color={box.color}
          width={box.width}
          height={box.height}
          key={box.id}
          value={box.id}
          removeBox={e => removeBox(box.id)} />)}
    </>
  );
};


export default BoxList;
