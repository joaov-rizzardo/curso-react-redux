import React from 'react';

import produtos from '../../data/produtos'

const produtosRow = produtos.map(produto => {
    return (
        <tr key={produto.id} className={produto.id % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{produto.id}</td>
            <td>{produto.descricao}</td>
            <td>{produto.preco}</td>
        </tr>
    )
})

export default props => {
    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {produtosRow}
                </tbody>
            </table>
        </div>
    )
}