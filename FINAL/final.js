var images = ['pictures/1.jpg','pictures/2.jpg','pictures/3.jpg','pictures/4.jpg'];
var arrayImagesElement = document.getElementById("arrayImages");

function createImageNode(imgSrc) {
    var img = document.createElement('img');
    img.src = imgSrc;
    img.width = "300";
    img.style.margin = "15px";
    return img;
}

images.forEach(img => {
    arrayImagesElement.appendChild(createImageNode(img));
});