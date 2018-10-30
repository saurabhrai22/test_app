var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// String
//notifier.notify('Message');


app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3050;

app.get('/home', function (req, res) {
    res.render('index');
});
app.get('/bar', function (req, res) {
    res.send('Hello from bar! [express sample]');
});
function openWebUrl(){
	require("openurl").open("https://www.fiat.it/")
}
app.listen(port);
console.log(port);

 
