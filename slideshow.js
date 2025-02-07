// Function to initialize slideshows independently
function initSlideshows() {
    let slideshows = document.querySelectorAll(".slideshow-container");

    slideshows.forEach((slideshow, index) => {
        slideshow.dataset.index = index; // Assign unique index to each slideshow
        slideshow.slideIndex = 0; // Initialize individual slide index
        showSlides(slideshow, 0);
        
        // Add event listeners for navigation buttons
        let prev = slideshow.querySelector(".prev");
        let next = slideshow.querySelector(".next");

        prev.addEventListener("click", function () {
            plusSlides(slideshow, -1);
        });

        next.addEventListener("click", function () {
            plusSlides(slideshow, 1);
        });
    });
}

// Function to change slides independently
function plusSlides(slideshow, n) {
    showSlides(slideshow, slideshow.slideIndex + n);
}

// Function to show slides independently
function showSlides(slideshow, n) {
    let slides = slideshow.getElementsByClassName("slide");
    
    if (n >= slides.length) {
        slideshow.slideIndex = 0;
    } else if (n < 0) {
        slideshow.slideIndex = slides.length - 1;
    } else {
        slideshow.slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideshow.slideIndex].style.display = "block";
}

// Initialize all slideshows when the page loads
document.addEventListener("DOMContentLoaded", initSlideshows);
