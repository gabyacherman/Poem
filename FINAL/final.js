var images = [
  'pictures/1.jpg',
  'pictures/2.jpg',
  'pictures/3.jpg',
  'pictures/4.jpg',
];
var slideshowElement = document.getElementById('slideshow');

function createImageNode(imgSrc) {
  var img = document.createElement('img');
  img.src = imgSrc;
  img.width = '300';
  img.style.margin = '15px';
  return img;
}

// 1. show only 1 picture

images.forEach(function (img) {
  slideshowElement.appendChild(createImageNode(img));
});
