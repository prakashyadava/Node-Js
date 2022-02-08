const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost/27017/';
const dbname = 'conFusion';

const dboper = require('./operations');
MongoClient.connect(url).then((client)=>{
    
    console.log('Connect correctly to the server');
    const db = client.db(dbname);
    dboper.insertDocument(db,{name: "Prakash", description: "Test"},'dishes')
    .then((result)=>{
        console.log('After Insert:\n');
        // console.log(result.ops);
        console.log(result.insertedIds);
        return dboper.findDocument(db,'dishes')
    })
    .then((docs)=>{
        console.log("Found Documents:\n",docs);
        return dboper.updateDocument(db,{name:'Prakash'},{description: 'Updated Test'},'dishes')
    })
    .then((result)=>{
        console.log('Updated document:\n',result.insertedId);
        return dboper.findDocument(db,'dishes')
    })
    .then((docs)=>{
        console.log("found documents:\n",docs);
        return db.dropCollection('dishes')
    })
    .then((result)=>{
        console.log("dropped collection:\n",result);
        client.close();
    }).catch((err)=>console.log(err));
   
})
.catch((err)=>console.log(err));