const express= require('express'); 
const bodyParser= require('body-parser');
const port=3000;
const app= express();
 
app.use(bodyParser.json());

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

var arrOfUsers = []
var i = 0
app.get('/users', (req, res)=>{
    if (arrOfUsers.length >= 1)
        res.send([{"id" : i-1}])
    else
        res.send([])
})

app.post('/user', (req, res)=>{
    arrOfUsers.push(i) 
    res.send({"id" : i})
    i++
})

app.get('/user/:id', (req, res)=>{
    res.send({"id" : arrOfUsers[req.params.id]})
})
