const express = require('express');
const app = express();

app.set('trust proxy', true);

app.get("/",(req,res)=>{
    // console.log(req.headers);
    // var forwardedIpsStr = req.header('x-forwarded-for');
    // var IP = '';
 
    // if (forwardedIpsStr) {
    //    IP = forwardedIps = forwardedIpsStr.split(',')[0];  
    // }

    let ip_details = req.socket.address();
          console.log(ip_details); 
    console.log(req.socket.remoteAddress);
    res.json({Ip:req.ip, IPV6: req.socket.remoteAddress});
})

const port = process.env.PORT || 8080


const listenServer = () => {
    console.log(`running device on ${port}`)
    console.log('App running on');
};

// Use IPv4 address to listen on IPv4
app.listen(port,listenServer);

// Use IPv6 address to listen on IPv6.
// app.listen(port, '2401:4900:169e:80c3:11e9:63ba:1f81:d224', listenServer);