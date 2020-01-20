var app = require('./config/server');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});