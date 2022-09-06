import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ExtraStudent = () => {
  const { studentId } = useParams();
  const [student] = useSelector(state => state.studentReducer.students.filter(student => student.id === Number(studentId)));
  const [campus] = useSelector(state => state.campusReducer.campuses.filter(campus => campus.id === Number(student.campusId)));

  return (
    <div className="studentAssociates">
      {campus ? (
        <Link to={`/campuses/${student.campusId}`}>{campus.name}</Link>
      ) : (
        <div>Currently taking inquries.</div>
      )}
    </div>
  );
};

export default ExtraStudent;