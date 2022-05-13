import Link from 'next/link'

import styles from '../styles/Layout.module.css'

export default props => {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Link href="/">Voltar</Link>
            </div>

            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}