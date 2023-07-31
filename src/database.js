const moongose = require("mongoose");
const {DB_ACCESS} = require("./config.js");
(async () =>{
    try {
        const db = await moongose.connect(DB_ACCESS)
        console.log('DB connect to', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()