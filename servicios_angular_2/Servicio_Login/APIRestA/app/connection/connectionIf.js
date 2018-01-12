module.exports = {
  user: 'postgres', //env var: PGUSER 
  database: 'db_angular', //env var: PGDATABASE 
  host : 'localhost',
  password: 123456, //env var: PGPASSWORD 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
}



