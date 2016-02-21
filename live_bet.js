/**
 * Created by wplct on 2016/2/20.
 */
function getTokey(){
    return $.cookie("LIVE_LOGIN_DATA")
}
//ROOMURL
function getRoomBet(){
    $.get("http://live.bilibili.com/bet/getRoomBet",
    {'roomid':ROOMURL},
    function(data){
        data=eval("("+data+")");
        console.log(data);
        alert(data);
    })
}
function addBet (){

}
console.log("wpl"+'test');
getRoomBet();

//console.log(getTokey());