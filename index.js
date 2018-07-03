const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
app.use(express.static(__dirname + '/client/dist'));

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('We are not connected to databse. Error: ' + err);
	} else {
		console.log(config.secret);
		console.log('We are connected to databse: ' + config.db);
	}
});


app.get('*', (req, res)=> {
	res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, ()=> {
	console.log('Server is listening port: 8080');
})