password = '9432129423';
var mysql  = require('mysql');
var catalog = {};

var option = process.argv[2];
var text = process.argv[3];

var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'Soumya',
 password : password,
 database : 'test'
});

connection.connect();

catalog.getCatalogObj = function(text){
var catalogObj = {};
var bookAttributes = ['isbn','price','author','title','publisher','noOfPages'];

var convert_element_to_object = function(element,index,book){
	key = element.split(':');
	var assignValuesToAttribute = function(attribute){
		if(key[0].indexOf(attribute)!=-1) 
			catalogObj[attribute]=key[1].trim();
	}
	bookAttributes.forEach(assignValuesToAttribute);
};
	var BreakBookInfo = text.split(';');
	BreakBookInfo.forEach(convert_element_to_object);
	return catalogObj;
};

catalog.addRecord = function(text){
	var bookInfo = {};
	bookInfo = catalog.getBookCatalogObj(text);

	var printMessage = function(err, rows, fields){
		if (err) throw err;
		console.log(bookInfo.isbn+' BOOK ADDED SUCESSFULLY\n');
	}
	connection.query('INSERT INTO bookcatalog(isbn,price,author,title,publisher) VALUES("'+bookInfo.isbn+'",'+bookInfo.price+',"'+bookInfo.author+'","'+bookInfo.title+'","'+bookInfo.publisher+'")',printMessage );
};

connection.end();