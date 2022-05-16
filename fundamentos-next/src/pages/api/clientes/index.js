export default function cliente(req, res){

    if(req.method === "GET"){
        handleGet(req, res)
    } else {
        req.status(405).send()
    }
 
}

function handleGet(res,res){
    res.status(200).json({
        id: 3,
        nome: 'João',
        idade: 22
    })
}