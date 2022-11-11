import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../actions/actionTypes";

const innitialState = {
    min: 1,
    max: 10
}

export default function (state = innitialState, action) {
    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
            break;

        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
            break;

        default:
            return state
        break;
    }

}