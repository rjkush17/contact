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
    <div className="py-10 text-center w-10/12 mx-auto ">
      <header className="text-3xl font-bold text-heading">Add Contact</header>
      <form onSubmit={handleForm} className="flex justify-between items-center">
        <div className="label-wrapper flex flex-col">
        <label htmlFor="name">Contact Name</label>
          <input
            type="text"
            className="input"
            id="name"
            value={inputValues.name}
            name="name"
            onChange={handleValues}
            placeholder="Enter Contact Name"
          />
          
        </div>

        <div className="label-wrapper flex flex-col">
        <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            className="input"
            id="number"
            name="number"
            onChange={handleValues}
            placeholder="Enter Contact Number"
          />
          
        </div>

        <div className="label-wrapper flex flex-col">
        <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="input"
            id="email"
            name="email"
            onChange={handleValues}
            placeholder="Enter Email"
          />
          
        </div>

        <div className="label-wrapper flex flex-col">
        <label htmlFor="label">label</label>
          <input
            type="text"
            className="input"
            id="label"
            name="label"
            onChange={handleValues}
            placeholder="Enter Lable Name"
          />
         
        </div>

        <button type="submit" className="button-cus button">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;
