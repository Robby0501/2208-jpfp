import React, {useState} from "react";
import {useDispatch} from "react-redux";

import submitCampusForm from "../../store/action/FormAction";

const NewCampus = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitCampusForm({ name, address }));
    setName("");
    setAddress("");
  };

  return (
    <form className="campusForm" onSubmit={handleSubmit}>
      <label>Create New Campus</label>
      <input
        required
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        name="name"
        placeholder="Enter Campus Name"
      />
      <input
        required
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        type="text"
        name="address"
        placeholder="Enter Campus Address"
      />
      <button type="submit">CREATE</button>
    </form>
  );
};

export default NewCampus;