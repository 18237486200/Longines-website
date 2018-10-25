//专门用于处理和轮播图第一页有关的请求
const express=require("express");
const router=express.Router();
const pool=require("../pool");

//测试地址:http://localhost:3000/inaugurator/getInauguratorProducts
router.get("/getInauguratorProducts",(req,res)=>{
    var sql="SELECT * FROM slideshowOne"
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        //res.send(result) 拆开  不支持跨域请求
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",  //返回的类型为json类型 charset:中文乱码
            "Access-Control-Allow-Origin":"*" // 解决跨域请求问题   *:一切来源的请求
        });
        res.write(JSON.stringify(result));
        res.send(); //结束请求
    })
})




module.exports=router;