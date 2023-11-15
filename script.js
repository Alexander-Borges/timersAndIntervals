const start = document.getElementById("start");
const stop = document.getElementById("stop");
const count = document.getElementById("count");

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);

//let timerID;
let animationFrameID;

setTimeout(() => {
    console.log(performance.now());
}, 1000);
//

function startTime(timestamp) {
    console.log(timestamp);
    //timerID = setInterval(() => {
    //    count.textContent++;
    //}, 500);
    count.textContent++;
    animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
    //clearInterval(timerID)
    cancelAnimationFrame(animationFrameID);

}