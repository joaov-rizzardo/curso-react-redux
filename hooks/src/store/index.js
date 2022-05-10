import reducer from './reducers/index'
import {add2ToNumber} from './actions/number'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

export {
    reducer,
    initialState,
    add2ToNumber
}

