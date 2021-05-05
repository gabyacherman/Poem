// slide you want to start with
let slideIndex = 0;
carousel();

function carousel() {
  // create a variable to count with
  let i;
  // get all the slides on the page
  let x = document.getElementsByClassName('mySlides');
  // go through every slide you just selected and hide them.
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  // increase the value of slideIndex by 1.
  slideIndex++;

  // check to see if we passed the end of the list. This just resets the slideshow
  if (slideIndex > x.length) {
    slideIndex = 1;
  }

  // At this point we're somewhere in the slideshow

  // Now show the image
  x[slideIndex - 1].style.display = 'block';

  // run this whole thing again after 2 seconds.
  setTimeout(carousel, 3000);
}
