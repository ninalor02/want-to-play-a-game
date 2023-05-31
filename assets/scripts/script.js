/* VAR BODY - DOCUMENT BODY */

var mainE1 = document.getElementById('time');
var secondsLeft =10;

function startTime() {
    //seting interval in variable //
    const today = new Date() {
        let s = today.getSeconds();
        document.getElementById('set').innerHTML = h + ":" + s;
        setTimeout(startTime, 1000);
    }
function checkTime(i) {
    if(i < 10) {i = "0" + i};
    return i;
};

}
  

/* I am unsure of how to set the timers and set it up and setting up the scores*/