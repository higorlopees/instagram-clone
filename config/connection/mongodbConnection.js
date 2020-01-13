const MongoClient  = require('mongodb').MongoClient;
const assert = require("assert");

const connMongoDb = function(options){
    MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function(err, client){
        assert.equal(null, err);
        const db = client.db("instagram");
        query(db, options);
        client.close();
    });
}

function query(db, options){
    const collection = db.collection(options.collection);
    switch(options.operation){
        case "insert":
            collection.insertOne(options.insert, options.callback);
            break;
        case "find":
            collection.find(options.where).sort({ _id: -1 }).toArray(options.callback);
            break;
        case "update":
            collection.updateMany(options.where, options.update, options.callback);
            break;
        case "delete":
            collection.deleteOne(options.where, options.callback);
    }
}

module.exports = function(){
    return connMongoDb;
}