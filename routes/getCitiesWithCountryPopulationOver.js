// modules
const worldModel = require('../model/world.js')

module.exports = async (req, res) => {
    if(typeof req.body.minPopulation == "undefined")
        return res.status(500).send('Invalid minimum country population (minPopulation)')

    res.json(await worldModel.getCitiesWithCountryPopulationOver(req.body.minPopulation))
}