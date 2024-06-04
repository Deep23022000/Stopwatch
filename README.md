# Stopwatch

A basic stopwatch web application with Start, Stop, and Reset buttons.

[Web Link](https://deep23022000.github.io/Stopwatch/) 
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Code Structure](#code-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a simple stopwatch application that allows users to start, stop, and reset a timer. The timer is displayed in a digital format showing hours, minutes, and seconds.


![image](https://github.com/Deep23022000/Stopwatch/assets/105705099/a531474e-e708-418b-a851-70eee7d830fe)


## Installation

No installation is required. Simply clone or download the repository and open `index.html` in your web browser.
```bash
git clone https://github.com/your-username/stopwatch.git
```

## Usage
Open index.html in a web browser.
Click the "Start" button to begin the stopwatch.
Click the "Stop" button to pause the stopwatch.
Click the "Reset" button to reset the stopwatch to 00:00:00.

## Code Structure
HTML
The HTML file includes a simple structure with a container for the stopwatch display and buttons to control the stopwatch.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Stopwatch</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="div-container">
        <div id="time-container">00 : 00 : 00</div>
        <div class="div-buttons">
            <button onclick="startStopwatch()" class="start">Start</button>
            <button onclick="stopStopwatch()" class="stop">Stop</button>
            <button onclick="resetStopwatch()" class="reset">Reset</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

CSS
The CSS file includes styling for the body, container, buttons, and the digital clock display.
```CSS
body{
    background-color: #343a40;
    
}

.div-container{
    background-color: #212529;
    position : relative;
    top: calc(10vw);
    left: 30%;
    width: 400px;
    height: 200px;
    border-radius: 5px;
    padding: 80px 0px 0px 80px;
    box-shadow: 
                10px 10px 15px rgba(0, 0, 0, 0.3),
                0px 10px 15px rgba(0, 0, 0, 0.3),   
                -10px 10px 15px rgba(0, 0, 0, 0.3); 
}

#time-container{
   font-size: 70px;
   font-family: digital-clock-font;
   color:aliceblue;
}

.div-buttons{
    margin : 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    
}

.start{
    background-color: #343a40;
    color:aliceblue;
    width: 80px;
    height: 40px;
    font-size:medium;
    border-width: 0px;
    transition: transform 0.3s ease-in-out;
}

.start:hover{
    transform: scale(1.1);
}

.reset{
    background-color: #343a40;
    color:aliceblue;
    width: 80px;
    height: 40px;
    font-size:medium;
    border-width: 0px;
    transition: transform 0.3s ease-in-out;
}

.reset:hover{
    transform: scale(1.1);
}
.stop{
    background-color: #da627d;
    color:aliceblue;
    width: 80px;
    height: 40px;
    font-size: medium;
    border-width: 0px;
    transition: transform 0.3s ease-in-out;
}

.stop:hover{
    transform: scale(1.1);
}
```
JavaScript
The JavaScript file contains the functionality to start, stop, and reset the stopwatch, as well as updating the time display.
```javascript
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
```
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss changes.

## License

The project is licensed under the [MIT License](LICENSE.md)


