//time variables
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");

//moment current hour/day/month/year/day of week/time
var currentDate = moment().format("Do MMM YYYY") + " " + moment().format('dddd');
var currentTime = moment().format('h:mm:ss a');

//time+day function
var calendar = setInterval(function() {
    var currentMoment = moment();
    $('#currentDay').html(currentMoment.format('YYYY MMMM DD') + ' '
                        + currentMoment.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + currentMoment.format('hh:mm:ss A'));
  }, 100);


//clear calendar
$("#clearCal").on("click", function(){
    localStorage.clear();
    initPage()
  });

//time blocks

//color coded time blocks (past/present/future)

//click block to add event

//save button

//save in local storage