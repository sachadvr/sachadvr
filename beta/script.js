var toggled = false;

function toggle() {
  var elmts = document.getElementsByClassName("info");
  setTimeout(function () {
    elmts[0].style.display = "none";
  }, 300);
  elmts[0].style.opacity = "0";
}
function cgu() {
  var elmts = document.getElementsByClassName("info");
  setTimeout(function () {
    elmts[0].style.display = "block";
  }, 300);
  elmts[0].style.opacity = "1";
  if (!toggled) {
    var toggledelement = document.getElementById("swap");
    var shownelement = document.getElementById("swap1");
    toggledelement.style.display = "none";
    shownelement.style.display = "block";
    this.toggled = !toggled;
  }
}
var form = document.forms["my_form"];

function submitAction() {
  form.submit();
}
function isValid() {
  return form.reportValidity();
}

function btnclick() {
  document.getElementById("btnsubmit").style.backgroundPosition = "-100% 0%";
  window.setTimeout(function() {

    document.getElementById("spansubmit").style.display = "inline-block";
    
    
   }, 900);
  
 window.setTimeout(function() {

  document.getElementById("spansubmit").style.transition = "1s";
  var length = document.getElementById("btnsubmit").offsetWidth;
  console.log(length);
  length = length - 20;
  document.getElementById("spansubmit").style.transform = ("translateX(" + length + "px)");
  
  
 }, 1000);
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!isValid()) return;
  btnclick();
  // if (isValid()) return;
  window.setTimeout(function () {
    submitAction();
  }, 2000);
});
// AOS.init();
