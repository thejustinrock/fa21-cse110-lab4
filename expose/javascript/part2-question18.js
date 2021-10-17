function theTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(theTime, 1000);