import React from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {unregisterStudent} from "../../store/action/UpdateAction";

const ExtraCampus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();

  const [campus] = useSelector((state) =>
    state.campusReducer.campuses.filter(
      (campus) => campus.id === Number(campusId)
    )
  );

  const handleClick = (event) => {
    dispatch(unregisterStudent(event.target.id))
  }

  return (
    <div className="campusAssociates">
      {campus.students.length ? (
        campus.students.map((student) => (
          <div key={student.id} className="student">
            <Link to={`/students/${student.id}`}>
              <p>{`${student.firstName} ${student.lastName}`}</p>
            </Link>
            <button onClick={handleClick} id={student.id}>unregister</button>
          </div>
        ))
      ) : (
        <div >Contact us for enrollment information!</div>
      )}
    </div>
  );
};

export default ExtraCampus;