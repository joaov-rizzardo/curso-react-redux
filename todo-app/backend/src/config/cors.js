module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}