import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import NewStudent from "./NewStudent";
import {removeStudent} from "../../store/action/DeleteAction";

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentReducer.students);

  const handleClick = (event) => {
    const id = event.target.offsetParent.dataset.id;
    dispatch(removeStudent(id))
  }

  return (
    <div className='container'>
      <div className="list">
        {students.length ? (students.map((student) => (
          <div data-id={student.id} className="item" key={student.id}>
            <button onClick={handleClick}>X</button>
            <img src={student.imageUrl} />
            <Link to={`students/${student.id}`}>
              {`${student.firstName} ${student.lastName}`}
            </Link>
          </div>
        ))) : (<div className="empty">There are no students to display.</div>)}
      </div>
      <NewStudent />
    </div>
  );
};

export default StudentList;