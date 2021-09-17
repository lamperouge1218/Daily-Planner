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

var format = "H";
var currentTime = moment().format(format);
console.log(currentTime);

$("input").each (function () {
    var hour = parseInt($(this).attr("id"));
    console.log(hour);
    if (hour < currentTime){
        $(this).addClass("past")
    } else if (hour > currentTime) {
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
    }
});

function save9() {
    var description9 = $(appForm9).val();
    console.log(description9);
    localStorage.setItem("9 appt", JSON.stringify(description9));
};

function save10() {
    var description10 = $(appForm10).val();
    console.log(description10);
    localStorage.setItem("10 appt", JSON.stringify(description10));
};

function save11() {
    var description11 = $(appForm11).val();
    console.log(description11);
    localStorage.setItem("11 appt", JSON.stringify(description11));
};

function save12() {
    var description12 = $(appForm12).val();
    console.log(description12);
    localStorage.setItem("12 appt", JSON.stringify(description12));
};

function save13() {
    var description13 = $(appForm13).val();
    console.log(description13);
    localStorage.setItem("13 appt", JSON.stringify(description13));
};

function save14() {
    var description14 = $(appForm14).val();
    console.log(description14);
    localStorage.setItem("14 appt", JSON.stringify(description14));
};

function save15() {
    var description15 = $(appForm15).val();
    console.log(description15);
    localStorage.setItem("15 appt", JSON.stringify(description15));
};

function save16() {
    var description16 = $(appForm16).val();
    console.log(description16);
    localStorage.setItem("16 appt", JSON.stringify(description16));
};

function save17() {
    var description17 = $(appForm17).val();
    console.log(description17);
    localStorage.setItem("17 appt", JSON.stringify(description17));
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

var appData9 = JSON.parse(localStorage.getItem("9 appt"));
var appData10 = JSON.parse(localStorage.getItem("10 appt"));
var appData11 = JSON.parse(localStorage.getItem("11 appt"));
var appData12 = JSON.parse(localStorage.getItem("12 appt"));
var appData13 = JSON.parse(localStorage.getItem("13 appt"));
var appData14 = JSON.parse(localStorage.getItem("14 appt"));
var appData15 = JSON.parse(localStorage.getItem("15 appt"));
var appData16 = JSON.parse(localStorage.getItem("16 appt"));
var appData17 = JSON.parse(localStorage.getItem("17 appt"));

function addData9() {
    if (appData9 !== null) {
        $(appForm9).val(appData9);
    }
};

function addData10() {
    if (appData10 !== null) {
        $(appForm10).val(appData10);
    }
};

function addData11() {
    if (appData11 !== null) {
        $(appForm11).val(appData11);
    }
};

function addData12() {
    if (appData12 !== null) {
        $(appForm12).val(appData12);
    }
};

function addData13() {
    if (appData13 !== null) {
        $(appForm13).val(appData13);
    }
};

function addData14() {
    if (appData14 !== null) {
        $(appForm14).val(appData14);
    }
};

function addData15() {
    if (appData15 !== null) {
        $(appForm15).val(appData15);
    }
};

function addData16() {
    if (appData16 !== null) {
        $(appForm16).val(appData16);
    }
};

function addData17() {
    if (appData17 !== null) {
        $(appForm17).val(appData17);
    }
};


addData9();
addData10();
addData11();
addData12();
addData13();
addData14();
addData15();
addData16();
addData17();

// make a variable that is the .getItem equal to the stored value that we save on saveBtn click 


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



