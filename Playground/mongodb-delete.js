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


//deletMany

// db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>
// {
//   console.log(result);
// })


db.collection('User').deleteMany({name:'Ronak'}).then((result) =>
{
  console.log(JSON.stringify(result,undefined,2));
})


//deletOne



// db.collection('Todos').deleteOne({text:"mkc"}).then((result)=>
// {
//   console.log(result);
// })


//Delete find one

// db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>
// {
//   console.log(result);
// })


  // db.close();
});
