
  var { createPool }= require('mysql');
  var pool = createPool({
    port     : 3306,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'restaurant',
    connectionLimit: 10
    
  });

module.exports = pool