import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";


import NewCampus from "./NewCampus";
import {removeCampus} from "../../store/action/DeleteAction";

const CampusList = () => {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campusReducer.campuses);

  const handleClick = (event) => {
    const id = event.target.offsetParent.dataset.id;
    dispatch(removeCampus(id))
  }

  return (
    <div className="container">
      <div className="list">
        {campuses.length ? (campuses.map((school) => (
          <div data-id={school.id} className="item" key={school.id}>
            <button onClick={handleClick}>X</button>
            <img src={school.imageUrl} alt="school-image" />
            <Link to={`${school.id}`}>{school.name}</Link>
          </div>
        ))) : (<div className="empty">There are no campuses to display.</div>)}
      </div>
      <NewCampus />
    </div>
  );
};

export default CampusList;
