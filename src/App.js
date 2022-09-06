import React, {useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';


import StudentList from "./components/students/StudentList";
import CampusList from "./components/campus/CampusList";
import SingleCampus from "./components/campus/SingleCampus";
import SingleStudent from "./components/students/SingleStudent";


import {retrieveCampuses, retrieveStudents} from "./store/action/RetrieveAction";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  useEffect(() => {
    dispatch(retrieveStudents());
    dispatch(retrieveCampuses());
  }, []);
  return (
    <>
      <nav>
        <Link to="/">Students {`(${state.studentReducer.students.length})`}</Link>
        <Link to="/campuses">Campuses {`(${state.campusReducer.campuses.length})`}</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/campuses" element={<CampusList />} />
        <Route path="/students/:studentId" element={<SingleStudent />} />
        <Route path='/campuses/:campusId' element={<SingleCampus />} />
      </Routes>
    </>
  );
}

export default App;