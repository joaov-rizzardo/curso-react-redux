export default function reducer(state, action){
    switch(action.type){
        case 'add2ToNumber':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.name}}
        case 'multiplyPerSeven':
            return {...state, number: state.number * 7}
        case 'divideTwentyFive':
            return {...state, number: state.number / 25}
        case 'parseInt':
            return {...state, number: parseInt(state.number)}
        case 'addNumber':
            return {...state, number: state.number + parseInt(action.number)}
        default:
            return state
    }
}