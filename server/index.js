const server = require('./app');

var port = process.env.port || 8080;

server.listen(port, function() {
    console.log('Server is listening on port', port);
})