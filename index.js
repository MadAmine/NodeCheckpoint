var http = require('http')
http.createServer( function (req,res){ 
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end();
}).listen(3000);
var fs = require('fs')

if(!'./welcome.txt')
fs.appendFile('welcome.txt','Hello NODE', function(err){
    if(err) throw err;
    console.log('Saved')
})


fs.readFile('./welcome.txt','utf8',function (err,data) { 
    console.log(data)
})

