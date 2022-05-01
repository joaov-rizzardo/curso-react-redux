import React from 'react'

// PROPS -> SÃO AS PROPRIEDADES PASSADAS PARA O COMPONENTE
// E SÃO SOMENTE LEITURA, NÃO PODEM SER MODIFICADAS
export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e está
                <strong> {status}</strong>
            </p>
        </div>
    )
}