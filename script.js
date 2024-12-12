function changeText() {
    var replaceText = document.    
    getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "scroll down";
 
    document.getElementById("icon-up").style.display = "none";
 
    document.getElementById("icon-down").style.display = "block";
 
 }

 var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');

if (btnSubmit) {
btnSubmit.addEventListener('click', function () {
modal.classList.add('show');


const next = document.querySelector('.next');
next.setAttribute('value', index.html);
});
}

var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

//Manual images slider
var manualNav = function(manual) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
    });

    slides[manual].classList.add("active");
    buttons[manual].classList.add("active");
}

buttons.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
        manualNav(i);
        currentSlide = i;
    })
})

var repeat = function(activeClass) {
  let active = document.
               getElementsByClassName("active");

  let i = 1;
  var repeater = function() {
    setTimeout(function() {
       [...active].forEach(function(activeSlide) {
          activeSlide.classList.remove("active");
       });

       slides[i].classList.add("active");
       buttons[i].classList.add("active");
       i++

       if(slides.length == i) {
         i = 0;
       }
       if(i >= slides.length) {
         return;
       }
       repeater(); 
     }, 5000);
  } 
  repeater();
}
repeat();



var codingProjects = document.querySelectorAll(".project, .item-video");


codingProjects.forEach((projecto,index) => {
  projecto.dataset.aos = "fade-down";
  projecto.dataset.aosDuration = 1500;
  projecto.dataset.aosDelay = index * 300;
  projecto.dataset.aosAnchorPlacement = "top-bottom"
})





AOS.init({
  once: true
});
AOS.refresh();

codingProjects.forEach((project, index) => {
  console.log(`Setting AOS for project #${index}`, project); // Debugging
});
codingVideos.forEach((video1, index) => {
  console.log(`Setting AOS for video #${index}`, video1); // Debugging
});