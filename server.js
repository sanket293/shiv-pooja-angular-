const express = require('express'),
path=require('path');

const app =express();

app.use(express.static('./dist/shiv-pooja'));

app.get('/*',(res,req)=>{
    res.sendFile(path.join(__dirname,'/dist/shiv-pooja/index.html'));
});

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("server started");
    
})