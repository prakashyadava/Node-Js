const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost/27017/';
const dbname = 'conFusion';
MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connect correctly to the server');
    const db = client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({"name": "Prabhat Yadava","description": "Author's Brother"},(err,result)=>{
        assert.equal(err,null);
        console.log('After Insert:\n');
        // console.log(result.ops);
        console.log(result.insertedId);
        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);
            console.log('Found\n');
            console.log(docs);
            db.dropCollection('dishes',(err,result)=>{
                assert.equal(err,null);
                console.log("dropped successfully");
                client.close()
            });
        });
    });
});