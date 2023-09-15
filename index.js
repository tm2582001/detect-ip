const express = require('express');
const app = express();

app.set('trust proxy', true);

app.get("/",(req,res)=>{
    console.log(req.ip);
    res.json({Ip:req.ip});
})

const port = 8080

app.listen(port,()=>{
    console.log(`running device on ${port}`)
})