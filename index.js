var http = require('http');
const fs = require('fs');


//create a server object:



http.createServer(
    (req, res) => {
        console.log(req.headers);
        // res.write('Hello World!'); //write a response to the client
        // res.end();
        var body = "";
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', function() {
            console.log(body);
            fs.appendFile('log.txt', "\n"+body+" ,"+((new Date).toISOString()), function (err) {
                if (err) throw err;
              });              
            res.write("OK");
            res.end();
        });
    }
).listen(3100); 