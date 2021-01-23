//STICKY HEADER
window.onscroll = function () { stickyHeader() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//BURGER MENU
document.querySelector(".icon").addEventListener('click', function(){
  document.querySelector("#burger").classList.toggle("responsive");
})

//Gallery hover animation
var text = [document.getElementById("text1"),
 document.getElementById("text2"),
  document.getElementById("text3"), 
document.getElementById("text4"),
 document.getElementById("text5"),
  document.getElementById("text6")];


function hide(text) {
    text.style.opacity = "0";
}

function show(text) {
    text.style.opacity = "1";

}

var img = [document.getElementById("img1"),
document.getElementById("img2"),
document.getElementById("img3"),
document.getElementById("img4"),
document.getElementById("img5"),
document.getElementById("img6"),]

function onMouseImg(img){
    img.style.opacity = ".2";
    img.style.transform = "scale(1.3)";
}

function noMouseImg(img){
    img.style.opacity = "1";
    img.style.transform = "scale(1)";
}

//Modal
var modal = document.getElementById("modal");
var modalImg = document.querySelector("#modal img");
var xmark = document.getElementById("croix");
var rightModal = document.querySelector(".right-modal");
var leftModal = document.querySelector(".left-modal");
var modalIndex = 0;

const images = document.querySelectorAll('.img-container')
console.log(images)
for(var image of images){
  image.addEventListener('click', function(){
    let el = this;
    let prevEl = this.previousElementSibling == null ? null : this.previousElementSibling;
    let nextEl = this.nextElementSibling == null ? null : this.nextElementSibling;
    console.log(el, nextEl, prevEl);
    var h4 = this.querySelector('h4').innerHTML;
    var src = this.querySelector('img').src;
    var alt = this.querySelector('img').alt;
    modalImg.src = src;
    document.querySelector('#modal img').alt = alt;
    document.querySelector('#modal h4').innerHTML = h4;
    let getSrc = modalImg.src;
    //show modal
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.style.zIndex = "9999";
    modalImg.style.visibility = "visible";
    modalImg.style.opacity = "1";
    modalImg.style.transform = "scale(1)";

    // rightModal.addEventListener("click", next())
  })
}

//close modal on window
window.onclick = function(event) {
  if (event.target == modal) {
    modalImg.style.visibility = "hidden";
    modalImg.style.transform = "scale(0)";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  }
}

//close modal on close
xmark.onclick = function() {
  modalImg.style.visibility = "hidden";
  modalImg.style.transform = "scale(0)";
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
}


//SLIDER
var slides = document.querySelectorAll('.slides .slide');
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');
var totalSlides = slides.length;
var index = 0;
var slideDots = document.querySelectorAll('#slide-dots a i');
var quotes = document.querySelectorAll('.quote');
console.log(slides, nextSlide, prevSlide, totalSlides, slideDots, quotes, quote1);

nextSlide.onclick = function(){
  nextImg("next");
}

prevSlide.onclick = function(){
  nextImg("prev");
}

function nextImg(direction){

  if(direction == "next"){
     index++;
      if(index == totalSlides){
       index = 0;
      }
  } 
  else{
      if(index==0){
           index=totalSlides-1;
      }
      else{
        index--;
        }
     }

 for(var i = 0; i < slides.length; i++){
         slides[i].classList.remove("active");
         slideDots[i].className = ("fas fa-circle") 
         quotes[i].className = ("quote")  
  }
  slides[index].classList.add("active");
  slideDots[index].className += (" active")   
  quotes[index].className += (" activeText")  
}