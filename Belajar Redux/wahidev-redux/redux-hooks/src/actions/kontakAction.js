import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

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
            console.log("3. Berhasil Get API", response.data)
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
            console.log("3. Gagal Get API", error.message)
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