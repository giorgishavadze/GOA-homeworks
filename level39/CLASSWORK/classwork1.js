const images = ['image.png', 'image1.png'];
        let currentIndex = 0;
function changeImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    } 
    else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    document.getElementById('currentImage').src = images[currentIndex];
}