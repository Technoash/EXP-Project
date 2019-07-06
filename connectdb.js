let mysql = require('async-mysql')

let connection = null;

//turn MySQL connect into async function that can be called multiple times
const connectDB = () => {
    
    if(connection != null) {
        //already connected
        return connection
    }

    console.log("connecting to MySQL");
    connection = mysql.connect({
        user     : 'dev',
        password : 'animal',
        database : 'world'
    })
    return connection

}

module.exports = connectDB;
