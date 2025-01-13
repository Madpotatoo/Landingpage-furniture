window.addEventListener("scroll", function () {
    const navigationContainer = document.querySelector(".navigation-container");
    const anchorTop = document.querySelector(".anchor-top");
    
    if (window.scrollY > 20) { // When scrolled down by 20px
        navigationContainer.classList.add("fixed");
        navigationContainer.classList.add("new-radius");
    } else {
        navigationContainer.classList.remove("fixed");
        navigationContainer.classList.remove("new-radius");
    }
    
});


window.addEventListener("scroll", function () {
    const anchorTop = document.querySelector(".anchor-top");

    // Show the button when scrolled down more than 500px
    if (window.scrollY > 300) {
        anchorTop.classList.add("show");
    } else {
        anchorTop.classList.remove("show");
    }
});

document.querySelector(".anchor-button").addEventListener("click", function () {
    window.scrollTo({
        top: 0,          // Scroll to the top
        behavior: "smooth" // Smooth scrolling animation
    });
});