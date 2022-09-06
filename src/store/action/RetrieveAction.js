import axios from "axios";

export const retrieveCampuses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/api/campuses');
            dispatch({ type: 'RETRIEVE_CAMPUSES_SUCCESS', payload: response.data })
        } catch (err) {
            dispatch({ type: 'RETRIEVE_CAMPUSES_FAILURE', err })
        }
    }
}

export const retrieveStudents = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/api/students');
            dispatch({ type: 'RETRIEVE_STUDENTS_SUCCESS', payload: response.data })
        } catch (err) {
            dispatch({ type: 'RETRIEVE_STUDENTS_FAILURE', err })
        }
    }
}