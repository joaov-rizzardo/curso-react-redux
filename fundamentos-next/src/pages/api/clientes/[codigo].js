export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `João ${codigo}`,
        email: 'jvitor4454@hotmail.com'
    })
}