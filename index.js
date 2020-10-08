/*
*
*PRIMARY FILE FOR THE (API)
*
*/

//DEPENDENCIES
var http = require('http')
var url = require('url')

//CREATE SERVER WITH HTTP
//The server should respond to all requests with a string
var server = http.createServer(function(req, res){

    //Get the URL and parse it
    var parsedUrl = url.parse(req.url, true)

    //Get the path
    var path = parsedUrl.pathname

    //Trim to remove slash spaces
    var trimmedPATH = path.replace(/^\/+|\/+$/g, "")

    //Get query string as an object
    var queryStringObject = parsedUrl.query;


    //Send the response
    res.end("Hello World!")

    // Get the http method
    var method = req.method.toLowerCase()

    //Log the request path
    console.log('request recieved on path: ', +trimmedPATH+', with this method: '+ method + ', and this query string:', queryStringObject)

})

//TELL SERVER TO START LISTENING ON PORT 3000
server.listen(3000, function(req, res){
    console.log('server is listening on port 3000 now')
})
