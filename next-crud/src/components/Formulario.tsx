import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente?: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.getId ?? null
    const [nome, setNome] = useState(props.cliente?.getNome ?? '')
    const [idade, setIdade] = useState(props.cliente?.getIdade ?? 0)
    
    return (
        <div>
            {id ? <Entrada texto="Código" valor={id} somenteLeitura className="mb-2" /> : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-2"/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
            
            <div className="mt-7 flex justify-end">
                <Botao 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} 
                    cor="blue" 
                    className="mr-2"
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} cor="gray">Cancelar</Botao>
            </div>
        </div>
    )
}