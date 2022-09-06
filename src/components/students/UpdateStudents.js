import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateStudent } from "../../store/action/UpdateAction";
import {useParams} from "react-router-dom";

const UpdateStudentForm = ({ student }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const campuses = useSelector((state) => state.campusReducer.campuses);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [gpa, setGpa] = useState("");
  const [campus, setCampus] = useState('')

  useEffect(() => {
    if (student) {
      setFirstName(student.firstName);
      setLastName(student.lastName);
      setEmail(student.email);
      setUrl(student.imageUrl);
      setGpa(student.gpa);
      setCampus(student.campusId)
    }
  }, []);

  const handleSubmit = (event) => {
    const campusId = event.target[3].value
    event.preventDefault();
    dispatch(updateStudent(params.studentId, { firstName, lastName, email, url, gpa, campusId }));
  };

  const handleSelectChange = (event) => {
    setCampus(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="studentForm">
      <label>Update Student</label>
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
      <select required onChange={(event) => { handleSelectChange(event) }} value={campus}>
        {campuses.map((campus) => (
          <option value={campus.id} key={campus.id}>
            {campus.name}
          </option>
        ))}
      </select>
      <input
        required
        type="text"
        onChange={(event) => {
          setGpa(event.target.value);
        }}
        value={gpa}
      />
       <input
        required
        onChange={(event) => {
          setUrl(event.target.value);
        }}
        value ={url}
        type="text"
        placeholder="Change Profile Image "
      />
      <button type="submit">UPDATE</button>
    </form>
  );
};

export default UpdateStudentForm;