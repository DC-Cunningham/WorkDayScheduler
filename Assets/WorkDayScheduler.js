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
    const timeBlock = $(this);
    const now = parseInt(moment().format("H"));
    const span = parseInt(timeBlock.attr("data-time"));
    if (span < now) {
      timeBlock.attr("class", "alert-danger alert text-center time-block");
    } else if (now == span) {
      timeBlock.attr("class", "alert-primary alert text-center time-block");
    } else {
      timeBlock.attr("class", "alert-success alert text-center time-block");
    }
  });
}

$(".lock").on("click", function() {
  if ($(this).attr("value") == "locked") {
    $(this).attr("value", "unlocked");
    $(this).html('<i class="fa fa-unlock"></i>');
    clearEntry();
  } else {
    $(this).attr("value", "locked");
    $(this).html('<i class="fa fa-lock"></i>');
    storeEntry();
  }
});

function clearEntry() {
  console.log("clear entry fired");
}

function storeEntry() {
  console.log("store entry fired");
}
