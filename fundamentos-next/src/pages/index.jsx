import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap : 'wrap'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/exemplo" texto="Exemplo" cor="#94009d"/>
            <Navegador destino="/jsx" texto="JSX" cor="crimson"/>
            <Navegador destino="/navegacao" texto="Navegação #01" cor="crimson"/>
            <Navegador destino="/cliente/sp-2/123" texto="Navegação #02" cor="blue"/>
            <Navegador destino="/estado" texto="Componente com estado" cor="pink"/>
        </div>
    )
}