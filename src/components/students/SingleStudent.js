import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import ExtraStudent from "./ExtraStudent";
import UpdateStudents from "./UpdateStudents";

const SingleStudent = () => {
  const { studentId } = useParams();
  const students = useSelector((state) => state.studentReducer.students);

  const [student] = students.filter(
    (student) => student.id === Number(studentId)
  );

  return (
    <>
      {student ? (
        <div className="singleItem">
          <h1>{`${student.firstName} ${student.lastName}`}</h1>
          <p>Email: {student.email}</p>
          <img src={student.imageUrl} alt="singleStudentImage" />
          <p>GPA : {student.gpa}</p>
          <div className="extras">
            <ExtraStudent />
            <UpdateStudents student={student} />
          </div>
        </div>
      ) : (
        <div>STUDENT HASN'T LOADED</div>
      )}
    </>
  );
};

export default SingleStudent;