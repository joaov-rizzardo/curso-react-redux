import styles from './Estiloso.module.css';
import Layout from '../components/Layout'
import Link from  'next/link'
export default function Estiloso() {
    return (
        <div className={styles.roxo}>
            <Layout titulo="Exemplo de CSS Modulararizado">
                <h1>Estilo usando CSS Módulos</h1>
            </Layout>
        </div>
    )
}