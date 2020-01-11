module.exports.get = function(application, req, res){
    res.send({ msg: 'Olá' });
}

module.exports.postApi = function(application, req, res){
    const data = req.body;

    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.insertPostApi(data, function(err, result){
        if(err) res.json({ status: 'error', error: err });
        else res.json({ status: 'insertion sucessfully' });
    });
}

module.exports.getApi = function(application, req, res){
    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.findGetApi({}, function(err, result){
        if(err) res.json({ status: 'error', error: err });
        else res.json(result);
    });
}

module.exports.getApiById = function(application, req, res){
    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.findGetApiById(req.params.id, function(err, result){
        if(err) res.json({ status: 'error', error: err });
        else res.json(result);
    });
}