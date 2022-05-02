import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card title="#07 - Desafio Repetição" color="#00c8f8">
                    <ListaProdutos />
                </Card>

                <Card title="#06 - Repetição" color="#00c8f8">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card title="#05 - Componentes com filhos" color="#00c8f8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

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