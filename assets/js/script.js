// moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// good text for the header to be the date/time

var time = moment().format("dddd, MMM Do, YYYY, HH:mm:ss a"); 
$("#currentDay").text(time);

// setInterval(() => {
    
// }, 1000);
// Will need to set the interval and have the timer auto update every second

function currentTime() {
    setInterval(() => {
        var time = moment().format("dddd, MMM Do, YYYY, HH:mm:ss a"); 
        $("#currentDay").text(time);
    }, 1000);
};

currentTime();




