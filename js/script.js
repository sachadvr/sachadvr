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
function info(test1) {
  var test2;
  if (test1 == 1) {
    document.getElementById("active").innerHTML = "<p>CasaROSA</p>";
    document.getElementById("active").style.backgroundImage = "url(../images/casarosa.PNG)";
    // test2 = '<p>Le site est toujours en construction, de ce fait, afin de permettre les retouches, l\'apperçu n\'est pas disponnible</p>';
  }else if (test1 == 2) {
    // test2 = '<p>Le test est toujours en construction, de ce fait, afin de permettre les retouches, l\'apperçu n\'est pas disponnible</p>';
    document.getElementById("active").innerHTML = "<p>RV-SERVICES</p>";
    document.getElementById("active").style.backgroundImage = "url(../images/showcase.svg)";
  } 
  window.setTimeout(function() {
    document.getElementById("active").style.visibility = "visible";
    document.getElementById("active").style.opacity = ".95";
    document.getElementById("active").style.height = "95%";
    document.getElementById("active").style.width = "95%";
    
  },0)
 
}
AOS.init({
  once: false,
  easing: 'ease-out-back',
  offset: 120,
  duration: 1200,
})