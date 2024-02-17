window.onload = function(){
  slideOne();
  slideTwo();
  slideThree();
  slideFour();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");

let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let displayValThree = document.getElementById("range3");
let displayValFour = document.getElementById("range4");

let minGap = 0;
let sliderTrack = document.getElementById("track1");
let sliderTrack2 = document.getElementById("track2");
let sliderMaxValue = document.getElementById("slider-1").max;
let sliderMaxValue2 = document.getElementById("slider-3").max;

// controls the left slider
function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    // stops the sliders in case the gap is less than the minimum gap
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
//controls the right slider
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}


// controls the left slider
function slideThree(){
  if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap){
    // stops the sliders in case the gap is less than the minimum gap
      sliderThree.value = parseInt(sliderFour.value) - minGap;
  }
  displayValThree.textContent = sliderThree.value;
  fillColor2();
}

//controls the right slider
function slideFour(){
  if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap){
      sliderFour.value = parseInt(sliderThree.value) + minGap;
  }
  displayValFour.textContent = sliderFour.value;
  fillColor2();
  // prints done
  console.log("done");
}

function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function fillColor2(){
    percent1 = (sliderThree.value / sliderMaxValue2) * 100;
    percent2 = (sliderFour.value / sliderMaxValue2) * 100;
    sliderTrack2.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
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


  //Header Script
  
  function onHover(element, openFunc, closeFunc) {
    element.addEventListener('mouseenter', openFunc);
    element.addEventListener('mouseleave', closeFunc ?? openFunc);
  }
  onHover(document.querySelector('#chat'), () =>
    document.querySelector('#chat > .popup').classList.toggle('hidden'));
  var signedIn = false;
  document.querySelector('#profile > .label').addEventListener('click', (ev) => {
    if(signedIn) {
      var popup = document.querySelector('#profile > .popup');
      popup.classList.toggle('hidden');
      popup.style['right'] = `${popup.offsetWidth - ev.target.offsetWidth}px`;
    } else {
      document.querySelector('#login-modal').classList.toggle('hidden');
    }
  });
  document.querySelector('#login-modal form svg').addEventListener('click', () =>
    document.querySelector('#login-modal').classList.toggle('hidden'));
  // now you can close the modal by just clicking outside of it.
  document.querySelector('#login-modal').addEventListener('click', () =>
    document.querySelector('#login-modal').classList.toggle('hidden'), false);
  document.querySelector('#login-modal form').addEventListener('click', (ev) =>
    ev.stopPropagation(), false);
