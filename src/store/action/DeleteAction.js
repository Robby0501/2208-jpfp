import axios from "axios";

export const removeCampus = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/api/campuses/${id}`)
            dispatch({ type: 'DELETE_CAMPUS_SUCCESS', payload: response.data });
        }
        catch (err) {
            dispatch({ type: 'DELETE_CAMPUS_FAILURE', error: err })
        }
    }
}

export const removeStudent = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/api/students/${id}`)
            dispatch({ type: 'DELETE_STUDENT_SUCCESS', payload: response.data });
        }
        catch (err) {
            dispatch({ type: 'DELETE_STUDENT_FAILURE', error: err })
        }
    }
}