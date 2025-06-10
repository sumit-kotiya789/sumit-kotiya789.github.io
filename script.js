const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const submitBtn = document.getElementById("submitBtn");
const hidden = document.getElementById("hidden");
const divv = document.getElementById("divv");


// Store original button position (for resetting later)
let originalTransform = submitBtn.style.transform;

submitBtn.addEventListener("mouseover", () => {
    if (option1.checked) {
        // Random movement (100-200px in any direction)
        const randomX = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 100) + 100);
        const randomY = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 100) + 100);
        
        submitBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        submitBtn.style.transition = "transform 0.1s"; // Smooth movement
        
    } else if (option2.checked) {
        hidden.classList.remove("hide")
        
        divv.classList.remove("hide")
    }
});


submitBtn.addEventListener("click", () => {
    if (option1.checked) {
        // Random movement (100-200px in any direction)
        const randomX = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 100) + 100);
        const randomY = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 100) + 100);
        
        submitBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        submitBtn.style.transition = "transform 0.1s"; // Smooth movement
        
    } else if (option2.checked) {
        hidden.classList.remove("hide")
        divv.classList.remove("hide")
    }
});

// Reset position when mouse leaves
submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.transform = originalTransform;
});
