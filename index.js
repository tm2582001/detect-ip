const express = require('express');
const app = express();

app.set('trust proxy', true);

app.get("/",(req,res)=>{
    console.log(req.headers);
    var forwardedIpsStr = req.header('x-forwarded-for');
    var IP = '';
 
    if (forwardedIpsStr) {
       IP = forwardedIps = forwardedIpsStr.split(',')[0];  
    }
    console.log(req.ip);
    res.json({Ip:req.ip, IPV6: IP});
})

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`running device on ${port}`)
})