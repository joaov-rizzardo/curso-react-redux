import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card title="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio maxNumber={100} minNumber={15} />
                </Card>

                <Card title="#03 - Fragmento" color="#e94c6f">
                    <Fragmento />
                </Card>

                <Card title="#02 - Com parâmetro" color="#e8b71a">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3} />
                </Card>

                <Card title="#01 - Primeiro Componente" color="#588e73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}