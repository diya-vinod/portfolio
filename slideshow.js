let slideIndexes = {};  // Object to store slide indexes for different slideshows

function plusSlides(n, slideshowId) {
    if (!(slideshowId in slideIndexes)) {
        slideIndexes[slideshowId] = 1; // Initialize index if not already set
    }
    showSlides(slideIndexes[slideshowId] += n, slideshowId);
}

function showSlides(n, slideshowId) {
    let slideshow = document.getElementById(slideshowId);
    let slides = slideshow.getElementsByClassName("slide");

    if (n > slides.length) { slideIndexes[slideshowId] = 1; }  // Loop back to first slide
    if (n < 1) { slideIndexes[slideshowId] = slides.length; }  // Loop back to last slide

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides in this slideshow
    }
    
    slides[slideIndexes[slideshowId] - 1].style.display = "block";  // Show active slide
}

// Initialize slideshows on page load
document.addEventListener("DOMContentLoaded", function () {
    let slideshows = document.getElementsByClassName("slideshow-container");
    for (let i = 0; i < slideshows.length; i++) {
        let slideshowId = slideshows[i].id;
        slideIndexes[slideshowId] = 1;  // Initialize slide index
        showSlides(1, slideshowId);  // Display the first slide
    }
});
