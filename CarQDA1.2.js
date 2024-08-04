var overlayText = document.getElementById("overlayText");
var messages = ["Strive for perfection in whatever you do."];

function typeText(message, index) {
  if (index < message.length) {
    overlayText.innerHTML = message.substring(0, index + 1);
    setTimeout(function() {
      typeText(message, index + 1);
    }, 100);
  } else {
    setTimeout(function() {
      disappearText();
    }, 1000);
  }
}

function disappearText() {
  var index = overlayText.innerHTML.length;
  if (index > 0) {
    overlayText.innerHTML = overlayText.innerHTML.substring(0, index - 1);
    setTimeout(function() {
      disappearText();
    }, 50);
  } else {
    nextMessage();
  }
}

function nextMessage() {
  var currentIndex = messages.indexOf(overlayText.innerHTML);
  var nextIndex = (currentIndex + 1) % messages.length;
  typeText(messages[nextIndex], 0);
}

nextMessage();
