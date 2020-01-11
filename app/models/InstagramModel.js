function InstagramModel(connection){
    this._connection = connection;
}

InstagramModel.prototype.insertPost = function(data, callback){
    const options = {
        operation: 'insert',
        insert: data,
        collection: 'posts',
        callback: callback
    };

    this._connection(options);
}

module.exports = function(){
    return InstagramModel;
}