import Layout from "../components/Layout"

export default function Jsx(){
    const a = 4
    const b = 3

    const titulo = <h1>JSX é um conceito Central</h1>
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {a * b}
            </div>
        </Layout>
    )
}