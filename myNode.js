//node服务
var express = require("express");  
var bodyParser = require("body-parser")  
var app = express(); 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get("/myNode/xueke", function(req, res){
	console.log(req.query) 
	if(req.query.password ==  "shumei"){
		res.send("success")
	}else{
		res.send("error")
	}
    
})
 
app.get("/api/xueke1", function(req, res){
    console.log(req.query) 
	if(req.query.password ==  "jike"){
		res.send("success")
	}else{
		res.send("error")
	}
    
})

app.get("/api/xueke2", function(req, res){
	console.log(req.query) 
	if(req.query.password ==  "wanggong"){
		res.send("success")
	}else{
		res.send("error")
	}

})
 

app.get("/api/xueke3", function(req, res){	
	console.log(req.query) 
	if(req.query.password ==  "dashuju"){
		res.send("success")
	}else{
		res.send("error")
	}
    
})

app.get("/api/xueke4", function(req, res){
	console.log(req.query) 
	if(req.query.password ==  "wulianwang"){
		res.send("success")
	}else{
		res.send("error")
	}
    
})

app.get("/api/xueke5", function(req, res){
	console.log(req.query) 
	if(req.query.password ==  "xinguan"){
		res.send("success")
	}else{
		res.send("error")
	}
    
})
 
 
app.listen(3000,function(){
    console.log("服务已启动，监听3000端口")
})