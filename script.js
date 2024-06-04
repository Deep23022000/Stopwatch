var startTime;
var pausedtime = 0;
var stopWatchInterval;

function startStopwatch(){
    startTime = new Date().getTime()- pausedtime;
    stopWatchInterval = setInterval(updateTime,1000)
}

function stopStopwatch(){
   clearInterval(stopWatchInterval)
    // var currentTime = new Date().getTime()
    // var elapsedTime = currentTime - startTime;
    pausedtime = new Date().getTime() - startTime;
   
}

function resetStopwatch(){
    stopStopwatch(); 
   pausedtime = 0;
    document.getElementById("time-container").innerHTML = "00 : 00 : 00"; 
 }
 

function updateTime(){
    var currentTime = new Date().getTime()
    var elapsedTime = currentTime - startTime;
    var seconds = Math.floor(elapsedTime/1000) % 60;
    var minutes =  Math.floor(elapsedTime / 1000 / 60) % 60
    var hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    document.getElementById("time-container").innerHTML = 
    // hours+" :"+minutes+" :"+seconds
    (hours<10? "0"+hours:hours)+" : "+
    (minutes<10? "0"+minutes:minutes)+" : "+
    (seconds<10? "0"+seconds:seconds);
}