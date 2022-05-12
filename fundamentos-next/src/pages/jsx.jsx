export default function Jsx(){
    const a = 4
    const b = 3

    const titulo = <h1>JSX é um conceito Central</h1>
    return (
        <div>
            {titulo}
            {a * b}
        </div>
    )
}