 const mongoose= require("mongoose")

 var  todoschme= mongoose.Schema


 const Schema=new todoschme({
    task:String,
    compalet:Boolean,
time : { type: Number, default: (new Date()).getTime() } 
 })

  const todo=mongoose.model('todo',Schema)
  module.exports=todo