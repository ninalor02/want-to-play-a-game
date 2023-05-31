/* VAR BODY - DOCUMENT BODY */

var mainE1 = document.getElementById('time');
var secondsLeft =10;

function startTime() {
    //seting interval in variable //
const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
    }
function checkTime(i) {
    if(i < 10) {i = "0" + i};
    return i;
};


  

/* I am unsure of how to set the timers and set it up and setting up the scores*/