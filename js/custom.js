let intervalid;
let userGet = () => {
    let hou = parseInt(prompt("Enter your Hours :-"));
    let min = parseInt(prompt("Enter your Minutes :-"));   // user get value
    let sec = parseInt(prompt("Enter your Seconds :-"));
    return (hou * 3600) + (min * 60) + sec;  // hour(60sec/minute * 60minut/hour),sec(30min * 60sec),(sec60) => convert sec..
}
function timefunc(value) {
    return (value < 10) ? "0" + value : value // 10 > time  9,8,7,6 => 09,08,07,06..01
}
let time = userGet(); // get value
let timer = () => {
    if (time <= 0) {
        clearInterval(intervalid);  // countdown end value (00 00 00) 
        return;
    }
    time--;
    document.getElementById("hou").innerHTML = timefunc(Math.floor(time / 3600)); // 3600sec convert hour
    document.getElementById("min").innerHTML = timefunc(Math.floor((time % 3600) / 60)); // 3665 % 3600 = 65/60 = 1 mini  
    document.getElementById("sec").innerHTML = timefunc(Math.floor(time % 60)); // 65 % 60 = 5sec
};
const start = () => {
    if (intervalid) {
        clearInterval(intervalid); // Clear any existing interval
    }
    intervalid = setInterval(timer, 1000);
}
const stop = () => {
    if (intervalid) {
        clearInterval(intervalid); // Stop the countdown
    }
}
const reset = () => {
    time = userGet();  //reset button get value
    if (intervalid) {
        clearInterval(intervalid);
    }
    document.getElementById("hou").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";    //reset value (00 00 00)
    document.getElementById("sec").innerHTML = "00";
}