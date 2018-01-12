var pg = require('pg');
var conn = require('./connection/connectionIf.js');
var pool = new pg.Pool(conn);

module.exports = function(app) { 

  ///catalogo
  app.get('/v.01/catalogo/listarCatalogo', lstCatalogo);
  app.post('/v.01/catalogo/obtenerCatalogo', catalogo);
  app.post('/v.01/catalogo/bajaCatalogo', bajaCatalogo);
  app.post('/v.01/catalogo/catalogoCodigo', catalogoCodigo);
  app.post('/v.01/catalogo/insertarCatalogo', insertarCatalogo);
  app.post('/v.01/catalogo/updateCatalogo', updateCatalogo);
  app.post('/v.01/catalogo/eliminaCatalogo', eliminaCatalogo);

  /////////Deudas
  obtenerDeudas
  app.get('/v.01/catalogo/obtener', obtenerDeudas);



  app.get('*', function(req, res) {
    res.sendfile('./index.html'); // Carga única de la vista
  });

  /////////////Catalogo///////////////
  function lstCatalogo(req, res){
    var dataQuery = "select * from grm_catalogo where catalogo_estado = 'ACTIVO'";
    ejecutarQuery(dataQuery, res);
  };

  function catalogo(req, res){
    console.log(req.query);
    var _variable = req.body.var;
    var dataQuery = "select *from sp_obtener_datos_catalogo('" + _variable + "')";
    ejecutarQuery(dataQuery, res);
  };

  function bajaCatalogo(req, res){
    var _catalogo_id                = req.body.catalogoId;
    var _catalogo_usuario           = req.body.catalogoUsuario;
    var dataQuery = "select sp_elimina_catalogo(" + _catalogo_id + ",'"+ _catalogo_usuario +"')";
    console.log(dataQuery);
    ejecutarQuery(dataQuery, res);
  };

  function eliminaCatalogo(req, res){
    var _catalogo_id                = req.body.id;
    var _catalogo_codigo            = req.body.cod;
    var _catalogo_descripcion       = req.body.desc;
    var _catalogo_usuario           = req.body.usu;
    var dataQuery = "select sp_elimina_catalogo_codigo(" + _catalogo_id + ",'"+ _catalogo_codigo +"','"+ _catalogo_descripcion+"','"+ _catalogo_usuario +"')";
    console.log(dataQuery);
    ejecutarQuery(dataQuery, res);
  };

  function catalogoCodigo(req, res){
    console.log(req.query);
    var _variable = req.body.var;
    var dataQuery = "select sp_obtener_datos_catalogo_codigo('" + _variable + "')";
    ejecutarQuery(dataQuery, res);
  };

  function insertarCatalogo(req, res){
    console.log(req.body);
    var _codigo = req.body.cod;
    var _descripcion = req.body.desc;
    var _tipo = req.body.tipo;  
    var _observaciones = req.body.obs;
    var dataQuery = "insert into grm_catalogo(catalogo_codigo,catalogo_descripcion,catalogo_tipo,catalogo_observaciones) values ('" + _codigo + "' , '" + _descripcion + "', '" + _tipo + "', '" + _observaciones + "')";
    ejecutarQuery(dataQuery, res);
  }

  function updateCatalogo(req, res){
    console.log(req.body);
    var _id=req.body.id;
    var _codigo = req.body.cod;
    var _descripcion = req.body.desc;
    var dataQuery = "UPDATE grm_catalogo SET catalogo_codigo ='" + _codigo + "' , catalogo_descripcion = '" + _descripcion + "' WHERE catalogo_id = " + _id + " ";
    ejecutarQuery(dataQuery, res);
}

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
            res.json({"data": result.rows,"success": { "code": 200  }});
          }
        });  
      }
    });
     
    pool.on('error', function (err, client) {
      res.json({"error": { "message": "error de instancia: "+err, "code": 603 }});
    });
  };
}
