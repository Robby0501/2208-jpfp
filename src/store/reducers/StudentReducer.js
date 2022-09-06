const initState = {
    students: [],
}

const studentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RETRIEVE_STUDENTS_SUCCESS':
            return {...state, students: action.payload };

        case 'POST_STUDENT_SUCCESS':
            return {...state, students: [action.payload, ...state.students] };

        case "UPDATE_STUDENT_SUCCESS":
            const otherStudents = state.students.filter(student => action.payload.id !== student.id);
            return {...state, students: [action.payload, ...otherStudents] };

        case 'DELETE_STUDENT_SUCCESS':
            const filteredStudents = state.students.filter(student => student.id !== action.payload.id)
            return {...state, students: filteredStudents };

        case 'UNREGISTER_STUDENT_SUCCESS':
            const classmates = state.students.filter(student => action.payload.id !== student.id);
            return {...state, students: [action.payload, ...classmates] };

        //errors
        case 'RETRIEVE_STUDENTS_FAILURE':
            return {...state, error: action.error, students: [] };

        case 'POST_STUDENT_FAILURE':
            return {...state, error: action.err };

        case "UPDATE_STUDENT_FAILURE":
            return {...state, error: action.err };

        case 'DELETE_STUDENT_FAILURE':
            return {...state, error: action.err };

        case 'UNREGISTER_STUDENT_FAILURE':
            return state;

        default:
            return state

    }
}

export default studentReducer;