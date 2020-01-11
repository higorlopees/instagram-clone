var app = require('./config/server');

const port = 8080;

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});