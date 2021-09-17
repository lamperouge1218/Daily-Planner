// moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// good text for the header to be the date/time

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

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // Button listener event throwing stuff into local storage. 
    // Similar to previous assignment? Sending it to an array for string concat?

// WHEN I refresh the page
// THEN the saved events persist



