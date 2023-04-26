var imageFiles = [];
var indicator = document.querySelector('.indicator');
var distance = 20; /* set the distance to move the indicator */
let position = 250;
indicator.style.left = `${position}px`;
currentIndex=0
/* move the indicator to the right by the distance when the next button is clicked */
document.querySelector('#next-btn').addEventListener('click', function() {
    position += distance;
    indicator.style.left = `${position}px`;
    currentIndex+=1;
    Image();
});
document.querySelector('#up-btn').addEventListener('click', () => {
    // Move the indicator to the right by 50 pixels
    position -= distance;
    indicator.style.left = `${position}px`;
    currentIndex-=1;
    Image();
  });
for (let i = 1; i <= 18; i++) {
    const image = document.createElement('img');
    image.src = i+'.png'; // specify the path to your image folder
    imageFiles.push('images/' + i+'.png');
}
function Image() {
    if (Math.abs(currentIndex -1) > imageFiles.length){
        document.querySelector('#main-image').src ="00.png"
    }
    document.querySelector('#main-image').src = imageFiles[currentIndex-1];
    
}

