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
  document.getElementById("btnsubmit").style.backgroundPosition = "-100% 0%";

  window.setTimeout(function () {
    document.getElementById("spansubmit").style.display = "inline-block";
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
