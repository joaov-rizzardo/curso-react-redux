import React, {useContext, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import {AppContext} from '../../data/Store'
const UseContext = (props) => {

    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    const {number, setNumber, text, setText} = useContext(AppContext)

    useEffect(() => {
        if(number > 1250){
            setText('Eitaaa!')
        }
    }, [number])
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercícios #01"/>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            </div>

            <div>
                <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                <button className="btn" onClick={() => addNumber(-1)}>-1</button>
            </div>
            <SectionTitle title="Exercícios #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
