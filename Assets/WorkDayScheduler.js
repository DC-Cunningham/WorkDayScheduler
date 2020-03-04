var timeAndDay = document.querySelector("#time-of-day");
var timeNow;
var timeBlock = $(".time-block");
renderTime();
hourColour();

function renderTime() {
  timeNow = document.createElement("h3");
  timeNow.setAttribute("class", "alert alert-primary text-center");
  timeAndDay.appendChild(timeNow);
  liveTime();
}

function liveTime() {
  timeNow.textContent = moment().format("MMMM Do YYYY, h:mm a");
  setInterval(liveTime, 1000);
}

function hourColour() {
  $(".time-block").each(function() {
    debugger;
    const timeBlock = $(this);
    const now = moment().format("H");
    const span = timeBlock.attr("data-time");
    console.log("this is now " + now);
    console.log("this is span " + span);
    if (span < now) {
      timeBlock.attr("class", "alert-danger alert text-center time-block");
      console.log("i Ran for now > span");
    } else if (now == span) {
      timeBlock.attr("class", "alert-primary alert text-center time-block");
      console.log("i Ran for now == span");
    } else {
      timeBlock.attr("class", "alert-success alert text-center time-block");
      console.log("i Ran for else");
    }
  });
}
