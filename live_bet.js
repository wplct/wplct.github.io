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
        console.log(data.data.isBet);
        console.log(data.data.betStatus);
    })
}
function addBet (){

}
getRoomBet()
//console.log(getTokey());