//darkmode.js
//handles darkmode

//Flag to indicate if darkmode is enabled
var isDarkmode = false;

//Toggle darkmode
function darkmode()
{
  isDarkmode = !isDarkmode;
  body = document.getElementById("body");
  if (isDarkmode) {
    body.style.background = "grey";
  } else {
    body.style.background = "aliceblue";
  }
}
