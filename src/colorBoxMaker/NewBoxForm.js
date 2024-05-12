import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {

  const INITIAL_STATE = {
    color: "",
    width: "",
    height: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        type="number"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        type="number"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add New BOX</button>
    </form>
  );
};


export default NewBoxForm;
