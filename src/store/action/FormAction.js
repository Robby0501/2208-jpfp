import axios from "axios"

export const submitStudentForm = (form) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/api/students', form);
            dispatch({ type: 'POST_STUDENT_SUCCESS', payload: response.data })
        }
        catch (err) {
            dispatch({ type: "POST_STUDENT_FAILURE", err })
        }
    }
}

const submitCampusForm = ({ name, address }) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/api/campuses', { name, address });
            dispatch({ type: 'POST_CAMPUS_SUCCESS', payload: response.data });
        }
        catch (err) {
            dispatch({ type: 'POST_CAMPUS_FAILURE', err })
        }
    }
}

export default submitCampusForm;