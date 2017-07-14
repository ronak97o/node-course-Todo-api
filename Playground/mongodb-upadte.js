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


// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('59689db3be1a59836ffcd49a')},
//   {
//     $set:
//     {
//       completed:true
//     }
//   },{
//     returnOriginal: false
//   }
// ).then((result) =>
// {
//   console.log(result);
// })

//
// db.collection('User').findOneAndUpdate({
//   _id: new ObjectID('59687377e7f94627183f602a')},
//   {
//     $set:
//     {
//       name:"Ronak"
//     }
//   },{
//     returnOriginal: true
//   }
// ).then((result) =>
// {
//   console.log(result);
// })

db.collection('User').findOneAndUpdate({
  _id: new ObjectID('59687377e7f94627183f602a')},
  {
    $set:
    {
      name:"ronak"
    }
  ,
  $inc: {
age:2
  }

},{
    returnOriginal: false
  }).then((result) =>
{
  console.log(result);
})
  // db.close();
});
