let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show current slide
    slides[slideIndex].style.display = "block";
}

// Auto-slide function
function autoSlides() {
    plusSlides(1);
    setTimeout(autoSlides, 4000); // Change slide every 4 seconds
}

autoSlides(); // Start the slideshow
