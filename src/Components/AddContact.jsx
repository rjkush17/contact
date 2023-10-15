import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Slice/Slices";

function AddContact() {
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch()

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addContact(inputValues))
  };

  const handleValues = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <header>AddContact</header>
      <form onSubmit={handleForm}>
        <div className="label-wrapper">
          <input
            type="text"
            className="border-2 border-black border-solid"
            id="name"
            value={inputValues.name}
            name="name"
            onChange={handleValues}
          />
          <label htmlFor="name">Contact Name</label>
        </div>

        <div className="label-wrapper">
          <input
            type="number"
            className="border-2 border-black border-solid"
            id="number"
            name="number"
            onChange={handleValues}
          />
          <label htmlFor="number">Phone Number</label>
        </div>

        <div className="label-wrapper">
          <input
            type="email"
            className="border-2 border-black border-solid"
            id="email"
            name="email"
            onChange={handleValues}
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="label-wrapper">
          <input
            type="text"
            className="border-2 border-black border-solid"
            id="label"
            name="label"
            onChange={handleValues}
          />
          <label htmlFor="label">label</label>
        </div>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;
