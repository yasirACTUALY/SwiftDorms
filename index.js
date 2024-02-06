window.onload = function(){
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}


function search() {
    //function to search of the dorm listed
  }
  function print() {
    //prints the top location of height of the search box
    console.log(
      document.querySelector(".sorting").getBoundingClientRect().top
    );
  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function sliders(){
    document.querySelector(".sorting").addEventListener("mouseleave",()=> {
    document.querySelector(".wrapper").style.display = "none";
    document.getElementById("wrapper").style.display = "none";
  });
    //turn on the display if it's off otherwise turn it off
    if(document.getElementById("wrapper").style.display == "block"){
      document.getElementById("wrapper").style.display = "none";
    }
    else{
      document.getElementById("wrapper").style.display = "block";
    }
    //prints done
    console.log("done");
  }