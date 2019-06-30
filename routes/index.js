//method to apply all routes to the express application
module.exports = (app) => {

    //index
    app.get("/", require("./root.js"))


    //countries list
    app.get("/countries", require("./getCountries.js"))


    //cities with countries over list
    app.get("/cities-with-country-population-over", require("./getCitiesWithCountryPopulationOver.js"))


    //addition
    app.get("/addition", require("./addition.js"))
}