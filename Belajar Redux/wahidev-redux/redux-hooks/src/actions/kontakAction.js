import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK"
export const DELETE_KONTAK = "DELETE_KONTAK"

export const getListKontak = () => {
    return (dispatch) => {
        // Loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })


        // get API
        axios({
            method: 'get',
            url: 'http://localhost:5000/kontak',
            // timeout: 120000
        })
        .then( (response) => {
            // Success get API
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        } )
        .catch( (error) => {
            // Failed get API
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        } )
    }
} 

export const addKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'POST',
            url: 'http://localhost:5000/kontak',
            timeout: 120000,
            data: data
        })
        .then( (response) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch( (error) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const deleteKontak =  (id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'DELETE',
            url: `http://localhost:5000/kontak/${id}`,
            timeout: 120000
        })
        .then((response) => {
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        } )

    }
}