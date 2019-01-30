var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: "8889",
	user: "root",
	password: "root",
	database: "burgers_db"
});

connection.connect(error => {
	if (error) {
		console.error(`Error Connecting: ${error.stack}`);
		return;
	}

	console.log(`Connected as ID ${connection.threadId}.`);
});

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection ({
        host: "localhost",
        user: "root",
        password: "hacktheplanet",
        database: "todoagain_db",
    });
};

module.exports = connection;