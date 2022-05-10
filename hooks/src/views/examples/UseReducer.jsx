import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer, add2ToNumber} from '../../store/index'

const UseReducer = (props) => {
    const [number, setNumber] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer"> 
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                <span className="text">{state.user.name}</span>
                :  <span className="text">Sem Usuário</span>}

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', name: 'Xyz'})}>Login</button>
                    <button className="btn" onClick={() => add2ToNumber(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'multiplyPerSeven'})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'divideTwentyFive'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'parseInt'})}>INT</button>
                    <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
                    <button className="btn" onClick={() => dispatch({type: 'addNumber', number: number})}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
