let startTime;
let Time;
const button = document.getElementById("button");
const display = document.getElementById("display");
display.id = "display";
document.body.appendChild(display);
button.onclick = function() {
    if (button.value === "Start") {
        button.value = "Stop";
        startTime = new Date();
        display.textContent = "";
    } else {
        button.value = "Start";
        const stopTime = new Date();
       Time = (stopTime - startTime) /1000;
        display.textContent = `Time: ${Time} sec.`;
    }
    if (Time == 3){
        display.style.color= "green";
    }
    else if (Time >= 2.8 && Time <3.2){
        display.style.color= "blue";
    }
    else if (Time >= 2.5 && Time <2.8 || Time >3.2 && Time >= 3.5){
        display.style.color= "yellow";
    }
    else {
        display.style.color= "red";
    }
};









