// const { json } = require('express')
const { request } = require('express')
var dotenv = require('dotenv')
var bodyParser = require('body-parser')
const todo = require('./model')
dotenv.config({ path: './.env' });
var url = process.env.URL
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect(url, (err) => {
    if (err)
       console.log(err)
    else
       console.log("monodogdbconcnd")
})


const app = express()
app.use(bodyParser.json())
// app.use(json)
//res.send(todo)

app.get('/', (req, res) => {
    todo.find((err,data)=>{
        if(err)
        res.send(err)
        else
        res.send(data)
    })

})
app.post('/', (req, res) => {

  const  task=req.body.task
  const  status=req.body.status
    var addtodo = new todo({
        task: task,
        compalet: status,

    })
    addtodo.save((err, data) => {
        if (err)
           res.send(err)
        else if (data)
           res.send(data)
        else
           res.send("Something went wrong")
    })

    res.send("this is post request")
})
app.put('/', (req, res) => {

//    res.send(req.body)
    res.send("this is post request")
})


app.delete('/:id', (req, res) => {
    var id = req.params.id
    
todo.findOneAndDelete({'_id':id}, (err,data)=>{
    if(err)
    res.send(err)
    else
    res.send("Task is  deleted")
})


})




app.listen(1000,()=>{
    console.log('serveris consort')
})
