// modules
const worldModel = require('../model/world.js')

module.exports = async (req, res) => {
    res.json(await worldModel.getCountries())
}