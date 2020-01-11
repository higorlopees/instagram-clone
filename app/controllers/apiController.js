module.exports.get = function(application, req, res){
    res.send({ msg: 'Olá' });
}

module.exports.post = function(application, req, res){
    const data = req.body;

    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.insertPost(data, function(err, result){
        if(err) res.json(err);
        else res.json(result);
    });
}