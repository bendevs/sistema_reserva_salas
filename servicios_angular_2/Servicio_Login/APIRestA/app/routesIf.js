var pg = require('pg');
var sql = require('mssql');
var x = require('./connection/connectionIf.js');
var pool = new pg.Pool(x);

module.exports = function(app) {  
  app.post('/wsIf/login', login);
  app.post('/wsIf/getMenu', getMenu);

  app.get('*', function(req, res) {
    res.sendfile('./index.html'); // Carga única de la vista
  });
};

function ejecutarQuery(dataQuery, res){
    pool.connect(function(err, client, done) {
      if(err) {
        res.json({"error": { "message": "error de conexion: "+err, "code": 601 }});
      }
      else
      {
        client.query(dataQuery, function(err, result) {
          done();
        
          if(err) {
            res.json({"error": { "message": "error de consulta: "+err, "code": 602 }});
          }
          else {
            //res.json(result.rows);  
            res.json({"success": { "data": result.rows, "code": 200  }});
          }
        });  
      }
    });
    pool.on('error', function (err, client) {
      res.json({"error": { "message": "error de instancia: "+err, "code": 603 }});
    });
};

function login(req, res) {
  console.log(req.body);
  var dataQuery = "SELECT * FROM autenticacion('"+req.body.usrid+"','"+req.body.usuario+"');";
  console.log(dataQuery);
  ejecutarQuery(dataQuery, res);
};

function getMenu(req, res) {
    var dataQuery = "select * FROM menu(" + req.body.idusr + ")";
    ejecutarQuery(dataQuery, res);
};

