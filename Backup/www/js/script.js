var toggled = false;

var elmts = (document.getElementById("cgubtn").onclick = function () {
  var elmts = document.getElementsByClassName("info");
  setTimeout(function () {
    elmts[0].style.display = "block";
  }, 300);
  elmts[0].style.opacity = "1";
  if (!toggled) {
    togglefunc("swap", "swap1");
    this.toggled = !toggled;
  }
});
var elmts = (document.getElementById("close").onclick = function () {
  var elmts = document.getElementsByClassName("info");
  setTimeout(function () {
    elmts[0].style.display = "none";
  }, 300);
  elmts[0].style.opacity = "0";
});

var form = document.forms["my_form"];

function submitAction() {
  form.submit();
}
function isValid() {
  return form.reportValidity();
}

function togglefunc(hidden, shown) {
  var toggledelement = document.getElementById(hidden);
  var shownelement = document.getElementById(shown);
  toggledelement.style.display = "none";
  shownelement.style.display = "block";
}
function btnclick() {
  var audio = document.getElementById("audio");
  audio.volume = 0.2;
  document.getElementById("btnsubmit").style.backgroundPosition = "-100% 0%";

  window.setTimeout(function () {
    document.getElementById("spansubmit").style.display = "inline-block";
    audio.play();
  }, 900);
  togglefunc("topscroll", "mailsender");

  window.setTimeout(function () {
    var length = document.getElementById("btnsubmit").offsetWidth;
    console.log(length);
    length = length - 20;
    document.getElementById("spansubmit").style.transform =
      "translateX(" + length + "px)";
  }, 1300);

  window.setTimeout(function () {
    document.getElementById("btnsubmit").value = "Envoyé!";
  }, 1500);

  window.setTimeout(function () {
    document.getElementById("mailsender").style.transform =
      "translateY(-1000px)";
    
  }, 2100);
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!isValid()) return;
  btnclick();
  // if (isValid()) return;

  window.setTimeout(function () {
    submitAction();
  }, 3000);
});

// function createObserver() {
//   var observer;

//   var options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: buildThresholdList()
//   };

//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(boxElement);
// }

// var numSteps = 20.0;

// var boxElement;
// var prevRatio = 0.0;
// var increasingColor = "rgba(40, 40, 190, ratio)";
// var decreasingColor = "rgba(190, 40, 40, ratio)";

// // On met l'ensemble en place.

// window.addEventListener("load", function(event) {
//   boxElement = document.querySelector("#whoami");

//   createObserver();
// }, false);

// function buildThresholdList() {
//   var thresholds = [];

//   for (var i=1.0; i<=numSteps; i++) {
//     var ratio = i/numSteps;
//     thresholds.push(ratio);
//   }

//   thresholds.push(0);
//   return thresholds;
// }

// function handleIntersect(entries, observer) {
//   entries.forEach(function(entry) {
//     if (entry.intersectionRatio > prevRatio) {
//       entry.
//     } else {
//       entry.target.style.opacity = "0";
//     }

//     prevRatio = entry.intersectionRatio;
//   });
// }

AOS.init({
  once: true,
  easing: 'ease-out-back',
  offset: 120,
  duration: 1200,
})