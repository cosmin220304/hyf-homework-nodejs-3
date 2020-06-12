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

app.get('/users', (req, res)=>{
    res.send([])
})
