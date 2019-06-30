let mysql = require('async-mysql')

let connection = null;

//turn MySQL connect into async function that can be called multiple times
async function connectDB(){
    
    if(connection != null) {
        //already connected
        return connection
    }

    console.log("connecting to MySQL")
    return await new Promise((res,rej)=>{
        mysql.connect({
            user     : 'dev',
            password : 'animal',
            database : 'world'
        }).then((con)=>{
            connection = con;
            console.log("connected")
            res(connection)
        })
    })
}

module.exports = connectDB;