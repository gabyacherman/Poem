var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// slideshow 2
var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides2');
  var dots = document.getElementsByClassName('dot2');
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex2 - 1].style.display = 'block';
  dots[slideIndex2 - 1].className += ' active';
}

// slideshow 3
var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3((slideIndex3 += n));
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides3');
  var dots = document.getElementsByClassName('dot3');
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex3 - 1].style.display = 'block';
  dots[slideIndex3 - 1].className += ' active';
}

// slideshow 4
var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides4((slideIndex4 += n));
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4((slideIndex4 = n));
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides4');
  var dots = document.getElementsByClassName('dot4');
  if (n > slides.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex4 - 1].style.display = 'block';
  dots[slideIndex4 - 1].className += ' active';
}

// slideshow 5
var slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5((slideIndex5 += n));
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5((slideIndex5 = n));
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides5');
  var dots = document.getElementsByClassName('dot5');
  if (n > slides.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex5 - 1].style.display = 'block';
  dots[slideIndex5 - 1].className += ' active';
}

// slideshow 6
var slideIndex6 = 1;
showSlides6(slideIndex6);

// Next/previous controls
function plusSlides6(n) {
  showSlides6((slideIndex6 += n));
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6((slideIndex6 = n));
}

function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides6');
  var dots = document.getElementsByClassName('dot6');
  if (n > slides.length) {
    slideIndex6 = 1;
  }
  if (n < 1) {
    slideIndex6 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex6 - 1].style.display = 'block';
  dots[slideIndex6 - 1].className += ' active';
}

// slideshow 7
var slideIndex7 = 1;
showSlides7(slideIndex7);

// Next/previous controls
function plusSlides7(n) {
  showSlides7((slideIndex7 += n));
}

// Thumbnail image controls
function currentSlide7(n) {
  showSlides7((slideIndex7 = n));
}

function showSlides7(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides7');
  var dots = document.getElementsByClassName('dot7');
  if (n > slides.length) {
    slideIndex7 = 1;
  }
  if (n < 1) {
    slideIndex7 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex7 - 1].style.display = 'block';
  dots[slideIndex7 - 1].className += ' active';
}

// slideshow 8
var slideIndex8 = 1;
showSlides8(slideIndex8);

// Next/previous controls
function plusSlides8(n) {
  showSlides8((slideIndex8 += n));
}

// Thumbnail image controls
function currentSlide8(n) {
  showSlides8((slideIndex8 = n));
}

function showSlides8(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides8');
  var dots = document.getElementsByClassName('dot8');
  if (n > slides.length) {
    slideIndex8 = 1;
  }
  if (n < 1) {
    slideIndex8 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex8 - 1].style.display = 'block';
  dots[slideIndex8 - 1].className += ' active';
}

// slideshow 9
var slideIndex9 = 1;
showSlides9(slideIndex9);

// Next/previous controls
function plusSlides9(n) {
  showSlides9((slideIndex9 += n));
}

// Thumbnail image controls
function currentSlide9(n) {
  showSlides9((slideIndex9 = n));
}

function showSlides9(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides9');
  var dots = document.getElementsByClassName('dot9');
  if (n > slides.length) {
    slideIndex9 = 1;
  }
  if (n < 1) {
    slideIndex9 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex9 - 1].style.display = 'block';
  dots[slideIndex9 - 1].className += ' active';
}


// // slideshow 10
// var slideIndex10 = 1;
// showSlides10(slideIndex10);

// // Next/previous controls
// function plusSlides10(n) {
//   showSlides10((slideIndex10 += n));
// }

// // Thumbnail image controls
// function currentSlide10(n) {
//   showSlides10((slideIndex10 = n));
// }

// function showSlides10(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides10');
//   var dots = document.getElementsByClassName('dot10');
//   if (n > slides.length) {
//     slideIndex10 = 1;
//   }
//   if (n < 1) {
//     slideIndex10 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex10 - 1].style.display = 'block';
//   dots[slideIndex10 - 1].className += ' active';
// }

// // slideshow 11
// var slideIndex11 = 1;
// showSlides11(slideIndex11);

// // Next/previous controls
// function plusSlides11(n) {
//   showSlides11((slideIndex11 += n));
// }

// // Thumbnail image controls
// function currentSlide11(n) {
//   showSlides11((slideIndex11 = n));
// }

// function showSlides11(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides11');
//   var dots = document.getElementsByClassName('dot11');
//   if (n > slides.length) {
//     slideIndex11 = 1;
//   }
//   if (n < 1) {
//     slideIndex11 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex11 - 1].style.display = 'block';
//   dots[slideIndex11 - 1].className += ' active';
// }

// // slideshow 12
// var slideIndex12 = 1;
// showSlides12(slideIndex4);

// // Next/previous controls
// function plusSlides12(n) {
//   showSlides12((slideIndex12 += n));
// }

// // Thumbnail image controls
// function currentSlide12(n) {
//   showSlides12((slideIndex12 = n));
// }

// function showSlides12(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides12');
//   var dots = document.getElementsByClassName('dot12');
//   if (n > slides.length) {
//     slideIndex4 = 1;
//   }
//   if (n < 1) {
//     slideIndex4 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex12 - 1].style.display = 'block';
//   dots[slideIndex12 - 1].className += ' active';
// }


// // slideshow 13
// var slideIndex13 = 1;
// showSlides13(slideIndex13);

// // Next/previous controls
// function plusSlides13(n) {
//   showSlides13((slideIndex13 += n));
// }

// // Thumbnail image controls
// function currentSlide13(n) {
//   showSlides13((slideIndex13 = n));
// }

// function showSlides13(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides13');
//   var dots = document.getElementsByClassName('dot13');
//   if (n > slides.length) {
//     slideIndex13 = 1;
//   }
//   if (n < 1) {
//     slideIndex13 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex13 - 1].style.display = 'block';
//   dots[slideIndex13 - 1].className += ' active';
// }

// // slideshow 14
// var slideIndex14 = 1;
// showSlides4(slideIndex4);

// // Next/previous controls
// function plusSlides14(n) {
//   showSlides14((slideIndex14 += n));
// }

// // Thumbnail image controls
// function currentSlide14(n) {
//   showSlides14((slideIndex14 = n));
// }

// function showSlides14(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides14');
//   var dots = document.getElementsByClassName('dot14');
//   if (n > slides.length) {
//     slideIndex14 = 1;
//   }
//   if (n < 1) {
//     slideIndex14 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex14 - 1].style.display = 'block';
//   dots[slideIndex14 - 1].className += ' active';
// }


// // slideshow 15
// var slideIndex15 = 1;
// showSlides15(slideIndex15);

// // Next/previous controls
// function plusSlides15(n) {
//   showSlides15((slideIndex15 += n));
// }

// // Thumbnail image controls
// function currentSlide15(n) {
//   showSlides15((slideIndex15 = n));
// }

// function showSlides15(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides15');
//   var dots = document.getElementsByClassName('dot15');
//   if (n > slides.length) {
//     slideIndex15 = 1;
//   }
//   if (n < 1) {
//     slideIndex15 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex15 - 1].style.display = 'block';
//   dots[slideIndex15 - 1].className += ' active';
// }