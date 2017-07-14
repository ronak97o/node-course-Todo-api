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
  // db.collection("Todos").insertOne({
  //   text:"something is wrong",
  //   completed: false
  // },(err,result) =>{
  //   if (err)
  //   {
  //     console.log("this is the error",err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection("User").insertOne({
  //   id:509,
  //   name:"Ronak",
  //   age:21,
  //   location:"Hyderabad"
  //
  // },(err,result) =>{
  //   if (err)
  //   {
  //     console.log("this is the error",err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();
});
