// Inicialización
var express  = require('express');
var app      = express();
var port  	 = process.env.PORT || 9093;
// Configuracion
app.configure(function() {
	app.use(express.static(__dirname )); 		
	app.use(express.logger('dev')); 						// activamos el log en modo 'dev'
	app.use(express.bodyParser());
	app.use(express.methodOverride());
 	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});
	app.get('/', function(req, res, next) {
	  // Handle the get for this route
	});

	app.post('/', function(req, res, next) {
	 // Handle the post for this route
	});

	app.put('/', function(req, res, next) {
	 // Handle the post for this route
	});
});

// Cargamos los endpoints
require('./app/routesIf.js')(app);
// levantamos y escuchamos el puerto
app.listen(port);
console.log("APP por el puerto " + port);