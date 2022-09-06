import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


import ExtraCampus from "./ExtraCampus";
import UpdateCampus from "./UpdateCampus";

const SingleCampus = () => {
  const {campusId} = useParams();
  const campuses = useSelector(state => state.campusReducer.campuses);
  const [campus] = campuses.filter(campus => campus.id === Number(campusId));
  
  return (
    <>
      {campus ? (
        <div className="singleItem">
          <h1>{campus.name}</h1>
          <img src={campus.imageUrl} alt="campus-image" />
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <div className='extras'>
            <ExtraCampus />
            <UpdateCampus campus={campus} />
          </div>
        </div>
      ) : (
        <div>Single Campus Loading...</div>
      )}
    </>
  );
};

export default SingleCampus;