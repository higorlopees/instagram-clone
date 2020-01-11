module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.apiController.get(application, req, res);
    });
    
    application.post('/api', function(req, res){
        application.app.controllers.apiController.post(application, req, res);
    });
};