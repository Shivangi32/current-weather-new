const express=require('express');
const app=express();

const fs=require('fs');

const path=require('path');
var requests=require("requests");
const homefile=fs.readFileSync(path.join(__dirname,"/home.html"),"utf-8");
const replaceval = (tempval,objdata)=>
{
    t=parseFloat(objdata.main.temp_min)-273.15;
    t=t.toPrecision(4);
    let temp=tempval.replace("{%tempmin%}",t.toString());
    t=parseFloat(objdata.main.temp_max)-273.15;
    t=t.toPrecision(4);
    temp=temp.replace("{%tempmax%}",t.toString());
    t=parseFloat(objdata.main.temp)-273.15;
    t=t.toPrecision(4);
    temp=temp.replace("{%temp%}",t.toString());
    temp=temp.replace("{%country%}",objdata.sys.country);
    temp=temp.replace("{%location%}",objdata.name);
    temp=temp.replace("{%tempstatus%}",objdata.weather[0].main);
    console.log(objdata.weather[0].main);
    return temp;
}

app.get("/",(req,res)=>{
    requests("http://api.openweathermap.org/data/2.5/weather?q=DELHI&appid=5afb5d69516b16834373df5f9568805a")
       .on('data', function (chunk) {
           var objdata=JSON.parse(chunk); 
           const realtimedata=replaceval(homefile,objdata);
           res.send(realtimedata);
        })//data close
       .on('end', function (err) {
           if (err) return err;
           res.end();
        })
});


app.use(express.static('public'));

app.listen(3000,()=>{
    console.log("listening to server at port 3000..");
});