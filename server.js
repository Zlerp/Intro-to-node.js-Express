var http = require('http');

    //  Required
    var server = http.createServer(function(request, response){
        //  Logged to console every request sent to server
        console.log('Connection');
        response.writeHead(200, {'Content-Type': 'text/html'});

        // Response.write = output onto html
        response.write('What Pablo');
        response.end();
    });
    // Port number for server
    server.listen(8001);
