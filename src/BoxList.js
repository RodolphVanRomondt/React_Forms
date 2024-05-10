import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import Box from "./Box";


const BoxList = () => {

  const [boxes, setBoxes] = useState([{ color: "red", width: 100, height: 100, id: uuid() }]);

  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxex => [...boxex, newBox]);
  };

  function removeBox(id) {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  return (
    <>
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
