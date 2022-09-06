import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {submitStudentForm} from "../../store/action/FormAction";

const NewStudent = () => {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campusReducer.campuses);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    const campusId = event.target[3].value
    event.preventDefault();
    dispatch(submitStudentForm({ firstName, lastName, email, campusId }));
    setFirstName('')
    setLastName('')
    setEmail('')
  };

  return (
    <form onSubmit={handleSubmit} className="studentForm">
      <label>Create New Student</label>
      <input
        required
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        value={firstName}
        type="text"
        name="firstName"
        placeholder="Enter First Name"
      />
      <input
        required
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        value={lastName}
        type="text"
        name="lastName"
        placeholder="Enter Last Name"
      />
      <input
        required
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        type="text"
        name="email"
        placeholder="Enter Email"
      />
      <select required>
        <option value=''>Select Campus</option>
        {campuses.map((campus) => (
          <option value={campus.id} key={campus.id}>{campus.name}</option>
        ))}
      </select>
      <button type="submit">CREATE</button>
    </form>
  );
};

export default NewStudent;