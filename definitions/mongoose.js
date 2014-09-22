// $ sudo npm install -g mongoose

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

mongoose.connection.on('connected', function(ref) {
	console.log('Connected');
});

global.mongoose = mongoose;