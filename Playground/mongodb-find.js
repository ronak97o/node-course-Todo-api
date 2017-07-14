// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);



var user ={name:"ronak",id:509}

var {name,id} = user;console.log(name,id);
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) =>{
  if (err)
  {
  return  console.log("unable to connect to data base");
  }
  else {
    console.log("sucessufully connected to server");
  }
// db.collection('Todos').find({_id: new ObjectID("5967c512f7059a25592c16da")
// }).toArray().then((docs) =>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
//
// },(err)=>
// {
//   console.log("error in the fetching",err);
//
// })
// db.collection('Todos').find().count().then((count) =>{
//   console.log(`Todos count:${count}`);

db.collection('User').find({name:"Ronak"}).count().then((count) =>{
  // console.log(JSON.stringify(docs,undefined,2));
  console.log(count );



},(err)=>
{
  console.log("error in the fetching",err);

})





  // db.close();
});
