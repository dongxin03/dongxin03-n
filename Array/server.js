let express=require("express");
let session = require("express-session");
let fs=require("fs");
let bodyParser=require("body-parser");

let app=express();

app.use(
    session({
      secret: "duowan", //=>用来对SESSION-ID相关的COOKIE进行签名
      saveUninitialized: false, //=>是否自动保存未初始化的会话，建议FALSE
      resave: false, //=>是否每次都重新保存会话，建议FALSE
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 //=>有效期，单位是毫秒
      }
    })
  );
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "3.2.1");
    next();
  });


  //不加这两个中间件  req。body  获取不到数据
  app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.get("/",function(req,res){
    fs.readFile("./data.json", { encoding: "utf8" },async (e,data)=>{
        if(e){
           res.send( "失败")
        }else{
            res.send(data)
        }
    })
})


app.post("/item",(req,res)=>{
    fs.readFile("./dataitem.json",{ encoding: "utf8" }, (e,data)=>{
      if(e){
        res.send("读取失败")
      }
      data=JSON.parse(data)
      req.body.obj.id=data.length+1;      
      data.push(req.body.obj)
      data=JSON.stringify(data);
      console.log(data);
      

    
      fs.writeFile("./dataitem.json",data,"utf-8",(e,data)=>{
        if(e){
          res.send("写入失败")
        }
      })
    })
   
    
    res.send("ok")
})

app.listen("444")