var password = '9432129423';
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Soumya',
  password : password
});

connection.connect();

var GetString=function(x){
	a = Object.keys(x);
	return a.map(function(y){
		return x[y];
	}).join('\t');
}

connection.query('select * from test.bookCatalog', function(err, rows, fields) {
  if (err) throw err;
  //console.log(rows);
  var records = rows.map(function(x){
					  	return GetString(x);
					  }).join('\n');
				  console.log(records);
				});

connection.end();

