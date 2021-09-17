// moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// good text for the header to be the date/time
var timeBlock = $(".time-day");
var appForm9 = $(".appointment9");
var appForm10 = $(".appointment10");
var appForm11 = $(".appointment11");
var appForm12 = $(".appointment12");
var appForm13 = $(".appointment13");
var appForm14 = $(".appointment14");
var appForm15 = $(".appointment15");
var appForm16 = $(".appointment16");
var appForm17 = $(".appointment17");
var pastColor = $(".past");
var presColor = $(".present");
var futColor = $(".future");
var input = $("<input>");
var saveBtn = $(".saveBtn");
var saveBtn9 = $(".saveBtn9");
var saveBtn10 = $(".saveBtn10");
var saveBtn11 = $(".saveBtn11");
var saveBtn12 = $(".saveBtn12");
var saveBtn13 = $(".saveBtn13");
var saveBtn14 = $(".saveBtn14");
var saveBtn15 = $(".saveBtn15");
var saveBtn16 = $(".saveBtn16");
var saveBtn17 = $(".saveBtn17");
var container = $(".container");


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
// var getCurrentTimeint = parseInt(currentTime);
// console.log(getCurrentTimeint);
console.log(currentTime);

$("input").each (function () {
    var hour9 = parseInt($(this).attr("id"));
    console.log(hour9);
    if (hour9 < currentTime){
        $(this).addClass("past")
    } else if (hour9 > currentTime) {
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
    }
});

function save9(event) {
    var description9 = $(appForm9).val();
    $(event.target);
    console.log(description9);
};

function save10(event) {
    var description10 = $(appForm10).val();
    $(event.target);
    console.log(description10);
};

function save11(event) {
    var description11 = $(appForm11).val();
    $(event.target);
    console.log(description11);
};

function save12(event) {
    var description12 = $(appForm12).val();
    $(event.target);
    console.log(description12);
};

function save13(event) {
    var description13 = $(appForm13).val();
    $(event.target);
    console.log(description13);
};

function save14(event) {
    var description14 = $(appForm14).val();
    $(event.target);
    console.log(description14);
};

function save15(event) {
    var description15 = $(appForm15).val();
    $(event.target);
    console.log(description15);
};

function save16(event) {
    var description16 = $(appForm16).val();
    $(event.target);
    console.log(description16);
};

function save17(event) {
    var description17 = $(appForm17).val();
    $(event.target);
    console.log(description17);
};

saveBtn9.on("click", save9);
saveBtn10.on("click", save10);
saveBtn11.on("click", save11);
saveBtn12.on("click", save12);
saveBtn13.on("click", save13);
saveBtn14.on("click", save14);
saveBtn15.on("click", save15);
saveBtn16.on("click", save16);
saveBtn17.on("click", save17);




// if (Element.dataset.hour < getCurrentTimeint) {
//     appForm.addClass(pastColor);
// };

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



