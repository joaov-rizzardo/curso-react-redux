import {React, useState} from 'react'

export default props => {

    const [qtde, setQtde] = useState(0)
    const [numeros, setNumeros] = useState([])
    
    
    return (
        <div>
            {numeros.join(' ')}
            <div>
                <input type="number" value={qtde} onChange={e => setQtde(e.target.value)} />
            </div>
            
            <button 
                onClick={e => setNumeros(gerarNumeros(qtde))}>
                Gerar números
            </button>
        </div>
    )
}

function gerarNumeros(qtde){
    
    let arrayNumeros = Array()
    
    for(let i = 0 ; i < qtde; i++){
        
        let numeroGerado = false
        
        while(!numeroGerado){
            let numero = Math.floor(Math.random() * 100)
            
            let verificaNumero = arrayNumeros.find(elemento => {
                if(elemento == numero){
                    return true
                }
            })

            if(verificaNumero){
                continue
            }

            arrayNumeros.push(numero)
            numeroGerado = true
        }
        
    }

    arrayNumeros.sort((n1, n2) => n1 - n2)
    return arrayNumeros
}