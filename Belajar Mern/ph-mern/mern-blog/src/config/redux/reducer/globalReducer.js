const initialState = {
    name: 'arrizky'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Hasya'
        }
    }
    return state;
}

export default globalReducer
