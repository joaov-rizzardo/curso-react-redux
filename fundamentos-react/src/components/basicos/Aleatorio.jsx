import React from 'react';

export default (props) => {

    const aleatoryNumber = getNumber(props.maxNumber, props.minNumber)

    return (
        <div>
            <h1>Número aleatório</h1>
            <p>O número aleatório gerado foi {aleatoryNumber}</p>
        </div>
    )
}

const getNumber = (maxNumber, minNumber) => {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
}