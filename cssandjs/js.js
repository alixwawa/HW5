// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
// variables for the hours of the day
var nineClock = $("#9am");

var tenClock = $("#10am");

var elevenClock = $("#11am");

var twelveClock = $("#12pm");

var oneClock = $("#13pm");

var twoClock = $("#14pm");

var threeClock = $("#15pm");

var fourClock = $("#16pm");

var fiveClock = $("#17pm");

var sixClock = $("#18pm");

var sevenClock = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;
// var hourString = $(".hour").text().split(" ");

// Date and Hour

var interval = setInterval(function () {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
        + momentNow.format('dddd')
            .substring(0, 3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineClock.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenClock.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenClock.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelveClock.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
    oneClock.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
    twoClock.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
    threeClock.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
    fourClock.val(init4);

    var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
    fiveClock.val(init5);

    var init6 = JSON.parse(localStorage.getItem("06:00 pm"));
    sixClock.val(init6);

    var init7 = JSON.parse(localStorage.getItem("07:00 pm"));
    sevenClock.val(init7);
}

function background() {

    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        //      console.log(this);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function () {
    initPage();
    background();

    // buttons that save to local storage
    $(".saveBtn").on("click", function () {
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));

    });
      

});
