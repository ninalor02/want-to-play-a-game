/* VAR BODY - DOCUMENT BODY */
var mainE1 = document.getElementById('time');
var secondsLeft =10;

function setTime() {
    //seting interval in variable //
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerInterval.textcontent = secondsLeft + "seconds left till quiz end"
    
        if(secondsLeft ===0){
            clearInterval(timerInterval);

            sendMessage();
        }
    
    }, 1000);
}
setTime();

/* I am unsure of how to set the timers and set it up and setting up the scores*/