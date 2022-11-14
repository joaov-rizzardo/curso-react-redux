const INNITIAL_STATE = { description: '', list: []}

export default (state = INNITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data}
        case 'TODO_ADDED':
            return {...state, description: ''}
        default:
            return state
            break
    }
}