const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const submitBtn = document.getElementById("submitBtn");
const hidden = document.getElementById("hidden");
const divv = document.getElementById("divv");

// Store original button position (for resetting later)
let originalTransform = submitBtn.style.transform;

// Define 5 fixed positions [x, y] in pixels
const fixedPositions = [
  [120, 80],    // position 1
  [-120, 60],   // position 2
  [100, 100],  // position 3
  [-80, 120],  // position 4
  [150, 50]    // position 5
];
let currentPositionIndex = 0;

submitBtn.addEventListener("mouseover", () => {
    if (option1.checked) {
        // Move to next fixed position
        const [x, y] = fixedPositions[currentPositionIndex];
        submitBtn.style.transform = `translate(${x}px, ${y}px)`;
        submitBtn.style.transition = "transform 0.2s ease-out";
        
        // Update position index (cycle through positions)
        currentPositionIndex = (currentPositionIndex + 1) % fixedPositions.length;
        
    } else if (option2.checked) {
        hidden.classList.remove("hide");
        divv.classList.remove("hide");
    }
});

submitBtn.addEventListener("click", () => {
    if (option1.checked) {
        // Move to next fixed position on click as well
        const [x, y] = fixedPositions[currentPositionIndex];
        submitBtn.style.transform = `translate(${x}px, ${y}px)`;
        submitBtn.style.transition = "transform 0.2s ease-out";
        
        currentPositionIndex = (currentPositionIndex + 1) % fixedPositions.length;
        
    } else if (option2.checked) {
        hidden.classList.remove("hide");
        divv.classList.remove("hide");
    }
});

// Reset position when mouse leaves
submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.transform = originalTransform;
    submitBtn.style.transition = "transform 0.3s ease-out";
});
