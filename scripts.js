document.addEventListener("DOMContentLoaded", function() {
    // Add any dynamic JS functionalities here, like fetching data from an API or handling form submissions.
    //document.getElementById("video1").currentTime = 10;
});

function Menu() {
    window.scrollBy(0,-100)
    
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}