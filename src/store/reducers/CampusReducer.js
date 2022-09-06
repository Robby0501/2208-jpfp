const initState = {
    campuses: [],
}

const campusReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RETRIEVE_CAMPUSES_SUCCESS':
            return { campuses: action.payload };

        case "POST_CAMPUS_SUCCESS":
            return { campuses: [...state.campuses, action.payload] };

        case "UPDATE_CAMPUS_SUCCESS":
            const newCampus = { ...action.payload, students: action.students };
            const otherSchools = state.campuses.filter(campus => action.payload.id !== campus.id);
            return { campuses: [newCampus, ...otherSchools] };

        case 'DELETE_CAMPUS_SUCCESS':
            const filteredCampuses = state.campuses.filter(campus => campus.id !== action.payload.id)
            return { campuses: filteredCampuses };

        case 'UNREGISTER_STUDENT_SUCCESS':
            const prevCampusId = action.prevCampus;
            const newCampusList = state.campuses.filter(campus => campus.id !== prevCampusId);
            const campus = state.campuses.find(campus => campus.id === prevCampusId)
            const newStudentsArr = campus.students.filter(student => student.id !== action.payload.id)
            campus.students = newStudentsArr;
            return { campuses: [campus, ...newCampusList] };

        case 'RETRIEVE_CAMPUSES_FAILURE':
            return {...state, error: action.error, campuses: [] };

        case "POST_CAMPUS_FAILURE":
            return {...state, error: action.err };

        case "UPDATE_CAMPUS_FAILURE":
            return {...state, error: action.err };

        case 'DELETE_CAMPUS_FAILURE':
            return {...state, error: action.err };
        default:
            return state;
    }
}

export default campusReducer;