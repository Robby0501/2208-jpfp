import axios from "axios";

export const updateCampus = (id, updates) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/campuses/${id}`);
            const response = await axios.put(`/api/campuses/${id}`, updates);
            dispatch({ type: 'UPDATE_CAMPUS_SUCCESS', payload: response.data, students: data[0].students })
        }
        catch (err) {
            dispatch({ type: 'UPDATE_CAMPUS_FAILURE', error: err })
        }
    }
}

export const updateStudent = (id, updates) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/students/${id}`);
            const response = await axios.put(`/api/students/${id}`, updates);
            dispatch({ type: 'UPDATE_STUDENT_SUCCESS', payload: response.data });
            if (data[0].campusId !== Number(updates.campusId)) {
                console.log('working')
            }
        }
        catch (err) {
            dispatch({ type: 'UPDATE_STUDENT_FAILURE', error: err })
        }
    }
}

export const unregisterStudent = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/students/${id}`);
            const response = await axios.put(`/api/students/${id}`, { campusId: null });
            dispatch({ type: 'UNREGISTER_STUDENT_SUCCESS', payload: response.data, prevCampus: data[0].campusId })
        }
        catch (err) {
            dispatch({ type: 'UNREGISTER_STUDENT_FAILURE', error: err })
        }
    }
}