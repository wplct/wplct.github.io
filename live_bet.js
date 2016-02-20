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
        console.log("wpl"+data.data.isBet);
        console.log("wpl"+data.data.betStatus);
    })
}
function addBet (){

}
getRoomBet()
//console.log(getTokey());