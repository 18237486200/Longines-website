window.onload=function(){
    ajax({
        url:"http://localhost:3000/inaugurator/getInauguratorProducts",
        type:"get",
        dataType:"json"//ajax可自动将json转为obj
    })//return promise
                //open(res)
    .then(function(res){
        console.log(res);
        new Vue({
            el:"#style",
            data:{
                res
            }
        })
    })
}