window.onload=function(){
    ajax({
        url:"http://localhost:3000/basel/getmen-1",
        type:"get",
        dataType:"json"
    })
    .then(function(res){
        console.log(res);
        new Vue({
            el:"#watch-style",
            data:{
                res
            }
        })  
    })
    //男士腕表更多选择 第三行
}  
