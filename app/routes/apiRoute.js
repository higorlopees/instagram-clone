module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.apiController.get(application, req, res);
    });
    
    application.post('/api', function(req, res){
        application.app.controllers.apiController.postApi(application, req, res);
    });

    application.get('/api', function(req, res){
        application.app.controllers.apiController.getApi(application, req, res);
    });

    application.get('/api/:id', function(req, res){
        application.app.controllers.apiController.getApiById(application, req, res);
    });

    application.put('/api/:id', function(req, res){
        application.app.controllers.apiController.putApiById(application, req, res);
    });

    application.delete('/api/:id', function(req, res){
        application.app.controllers.apiController.deleteApiById(application, req, res);
    });
};