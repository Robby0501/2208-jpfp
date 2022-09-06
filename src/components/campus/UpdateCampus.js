import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateCampus} from "../../store/action/UpdateAction";
import {useParams} from "react-router-dom";

const UpdateCampus = ({ campus }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (campus) {
      setName(campus.name);
      setAddress(campus.address);
      setAddress(campus.address);
      setDescription(campus.description);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateCampus(params.campusId, { name, address, description }))
  }

  return (
    <>
      {campus ? (
        <form onSubmit={handleSubmit} className="campusForm">
          <label>Update Campus</label>
          <input
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
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
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            placeholder="(optional) Enter Campus Description"
          ></textarea>
          <button>UPDATE</button>
        </form>
      ) : (
        <div>Form Loading...</div>
      )}
    </>
  );
};

export default UpdateCampus;