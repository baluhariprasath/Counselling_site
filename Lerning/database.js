const {createPool} = require('mysql');

const pool = createPool({
    host: "locallost",
    user: "root",
    password: "",
    database: "counsellingsite",
    connectionLimit: 10
})

pool.query('select * from collegeslist', (err, result, fields)=>{
    if(err){
    return console.log(err);
    }
    return console.log(result);
})