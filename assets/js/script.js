// moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// good text for the header to be the date/time
var timeBlock = $(".time-day");
var appForm = $(".appointment");
var pastColor = $(".past");
var presColor = $(".present");
var futColor = $(".future");


var time = moment().format("dddd, MMM Do, YYYY, HH:mm:ss a"); 
$("#currentDay").text(time);

function currentTime() {
    setInterval(() => {
        var time = moment().format("dddd, MMM Do, YYYY, HH:mm:ss a"); 
        $("#currentDay").text(time);
    }, 1000);
};

currentTime();

// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // This is done. 

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // Done

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // See stuff in slack. Possibly tying current time to some hour, possibly for each block
    // if statment such that 

var format = "H";
var currentTime = moment().format(format);
var getCurrentTimeint = parseInt(currentTime);
console.log(getCurrentTimeint);

if (timeBlock < getCurrentTimeint) {
    appForm.addClass(pastColor);
};

// WHEN I click into a timeblock
// THEN I can enter an event
    // Done as part of it being a form lol

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // Button listener event throwing stuff into local storage. 
    // Similar to previous assignment? Sending it to an array for string concat?

// WHEN I refresh the page
// THEN the saved events persist
    // More saving stuff to localStorage



