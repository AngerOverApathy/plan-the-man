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
var currentDate = moment().format("dddd") + " " + moment().format('MMM Do YYYY');
var currentTime = moment().format('h:mm:ss a');

//color blocks
$(document).ready(function() {
  $('.saveBtn').on('click', function() {
    var time =$(this).siblings('.form-control').attr('id');
    var task = $(this).siblings('.form-control').val();

    window.localStorage.setItem(time, task)
  })

//check time for color blocking
function checkHour() {
  $('.form-control').each(function() {
    var currentHour = moment().hours();
    var blockHour = $(this).attr('id').split('');
    var newHour = parseInt(blockHour[0]+blockHour[1])
  
    if(newHour < currentHour) {
      $(this).addClass('past')
    } else if(newHour === currentHour) {
      $(this).addClass('present')
      $(this).removeClass('past')
    } else {
      $(this).addClass('future')
      $(this).removeClass('past')
      $(this).removeClass('present')
    }
  })
}


  //clear calendar
  $("#clearCal").on("click", function(){
    window.localStorage.clear();
    window.location.reload();
  });

  checkHour();
  var checkInterval = setInterval(checkHour, 15000)
})


//time+day function
var calendar = setInterval(function() {
    var currentMoment = moment();
    $('#currentDay').html(currentMoment.format('YYYY MMMM DD') + ' '
                        + currentMoment.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + currentMoment.format('hh:mm:ss A'));
  }, 100);


//saving to local storage
for(let i =8 ; i<= 17; i++) {
  if(i<12) {
    $('#' + i + 'am').val(localStorage.getItem(i + 'am'))
  } else {
    $('#' + i + 'pm').val(localStorage.getItem(i + 'pm'))
  }
}
