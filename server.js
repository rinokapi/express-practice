// require the dependecies
const bodyParser = require("body-parser");
const express = require("express");

// define express()
const app = express();

// static path
app.use("/public", express.static(__dirname + "/public"));

// log the request
app.use((req, res, next) => {
	const log = req.method + " " + req.originalUrl + " on " + Date().slice(0, 24);
	next(console.log(`${log}\n`));
});

// routes
app.get("/", (req, res) => {
	// res.send("welcome to express ☕☕☕");
	res.sendFile(__dirname + "/src/views/index.html");
});

// error handler
app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + "/src/views/404.html");
});

// server up
const port = process.env.port || 3000;
app.listen(port, () =>
	console.log(`\nserver is running on port ${port}...\n🔥🔥🔥\n`)
);
