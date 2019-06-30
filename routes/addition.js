// modules
const mathsModel = require('../model/maths.js')


module.exports = async (req, res) => {
    if(typeof req.body.a != "number")
        return res.status(500).send('Invalid number a')

    if(typeof req.body.b != "number")
        return res.status(500).send('Invalid number b')
    
    res.json(await mathsModel.addition(req.body.a, req.body.b))
}