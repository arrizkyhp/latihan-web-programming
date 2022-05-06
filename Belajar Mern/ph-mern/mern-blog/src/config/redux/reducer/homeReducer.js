const initialStateHome = {
    dataBlog: [],
}

const homeReducer = (state = initialStateHome, action) => {
    // action digunakan untuk merubah Global state
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }
    return state;
}

export default homeReducer