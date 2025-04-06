let startTime;
let Time;
let attemptNumber = 0;
let attemptsLog = [];
const button = document.getElementById("button");
const attemptsButton = document.getElementById("attempts");
const display = document.getElementById("display");
const attemptDisplay = document.getElementById("attempt");
const summary = document.getElementById("summary")
button.onclick = function () {
    if (button.value === "Start") {
        button.value = "Stop";
        startTime = new Date();
        display.textContent = "";
    } else {
        button.value = "Start";
        const stopTime= new Date();
        attemptNumber++;
        Time = (stopTime - startTime) / 1000;
        display.textContent = `Time: ${Time} sec.`;
        attemptsLog.push({
            attempt: attemptNumber,
            start: startTime,
            stop: stopTime,
            time: Time
        });
    }
    if (Time == 3) {
        display.style.color = "green";
    } else if (Time >= 2.8 && Time < 3.2) {
        display.style.color = "blue";
    } else if ((Time >= 2.5 && Time < 2.8) || (Time > 3.2 && Time <= 3.5)) {
        display.style.color = "yellow";
    } else {
        display.style.color = "red";
    }
};
attemptsButton.onclick = function () {
    $("#attempt").empty();
    for (let i = 0; i < attemptsLog.length; i++) {
        const entry = attemptsLog[i];
        $("#attempt").append(
            `<p>Attempt #${entry.attempt}: Start - ${entry.start}, Stop - ${entry.stop}, Time - ${entry.time} sec.</p>`
        );
    }
};
summary.onclick = function(){
    $("#summary").append(
        attemptsLog.length
    )

}












