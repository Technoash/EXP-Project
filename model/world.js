const connectDB = require("../connectdb.js")


module.exports = {
    getCountries: async () => {
        let connection = await connectDB();

        let rows = await connection.query('SELECT * FROM country;');

        return rows;
    },
    getCitiesWithCountryPopulationOver: async(population) => {
        let connection = await connectDB();

        let rows = await connection.query(
            'SELECT `city`.`Name`, `country`.`Name` AS Country, `city`.`CountryCode`, `city`.`Population` \
            FROM `city` \
            JOIN `country` ON `city`.`CountryCode` = `country`.`Code` \
            WHERE `country`.`Population` > ? \
            ;'
        , population);

        return rows;
    }
}