const objectId = require('mongodb').ObjectId;

function InstagramModel(connection){
    this._connection = connection;
}

InstagramModel.prototype.insertPostApi = function(data, callback){
    const options = {
        operation: 'insert',
        insert: data,
        collection: 'posts',
        callback: callback
    };

    this._connection(options);
}

InstagramModel.prototype.findGetApi = function(data, callback){
    const options = {
        operation: 'find',
        where: data,
        collection: 'posts',
        callback: callback
    };

    this._connection(options);
}

InstagramModel.prototype.findGetApiById = function(data, callback){
    const options = {
        operation: 'find',
        where: objectId(data),
        collection: 'posts',
        callback: callback
    };

    this._connection(options);
}

InstagramModel.prototype.updatePutApiById = function(data, callback){
    const options = {
        operation: 'update',
        where: { _id: objectId(data.id) },
        update: { 
            $push: {
                comments: {
                    comment_id: new objectId(),
                    comment: data.update.comment
                } 
            } 
        },
        collection: 'posts',
        callback: callback
    };

    this._connection(options);
}

InstagramModel.prototype.deleteDeleteApiById = function(data, callback){
    const options = {
        operation: 'update',
        where: {},
        update: {
            $pull: {
                comments: {
                    comment_id: objectId(data)
                }
            }
        },
        collection: 'posts',
        callback: callback
    };

    this._connection(options);
}

module.exports = function(){
    return InstagramModel;
}