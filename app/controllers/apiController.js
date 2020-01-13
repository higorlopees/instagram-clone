const fs = require('fs');

module.exports.get = function(application, req, res){
    res.send({ msg: 'Olá' });
}

module.exports.postApi = function(application, req, res){
    const date = new Date();

    const image_url = date.getTime() + '_' + req.files.file.originalFilename;

    const source_path = req.files.file.path;
    const destination_path = './uploads/' +  image_url;

    fs.rename(source_path, destination_path, function(err){
        if(err) res.status(500).json({ error: err });
        else{
            const data = {
                title: req.body.title,
                image_url: image_url
            }

            const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);
        
            InstagramModel.insertPostApi(data, function(err, result){
                if(err) res.status(500).json({ status: 'error', error: err });
                else res.json({ status: 'insertion sucessfully' });
            });
        }
    });

}

module.exports.getApi = function(application, req, res){
    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.findGetApi({}, function(err, result){
        if(err) res.status(500).json({ status: 'error', error: err });
        else res.json(result);
    });
}

module.exports.getApiById = function(application, req, res){
    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.findGetApiById(req.params.id, function(err, result){
        if(err) res.status(500).json({ status: 'error', error: err });
        else res.json(result);
    });
}

module.exports.putApiById = function(application, req, res){
    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.updatePutApiById({ id: req.params.id, update: req.body }, function(err, result){
        if(err) res.status(500).json({ status: 'error', error: err });
        else res.json(result);
    });
}

module.exports.deleteApiById = function(application, req, res){
    const InstagramModel = new application.app.models.InstagramModel(application.config.connection.mongodbConnection);

    InstagramModel.deleteDeleteApiById(req.params.id, function(err, result){
        if(err) res.status(500).json({ status: 'error', error: err });
        else res.json(result);
    });
}

module.exports.getImage = function(application, req, res){
    const img = req.params.image;

    fs.readFile('./uploads/' + img, function(err, content){
        if(err) res.status(400).json(err);
        else{
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(content);
        }
    });
}