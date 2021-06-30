const Pool= require("pg").Pool;

const pool= new Pool({
    user: "postgres",
    password: "Jatin5805",
    database: "facultydb",
    host: "localhost",
    port: 3000
});

module.exports= pool;