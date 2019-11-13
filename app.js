const express = require("express")
const bodyParser= require("body-parser")
const cors = require("cors")

const appRouter = require("./route")


const app=express()
const port =3333

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, *POST*, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/files',express.static('public'))
app.use('/api/v1',appRouter)

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})