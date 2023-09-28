document.addEventListener("DOMContentLoaded", function () {
  // Function to shuffle the order of elements in an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Get the container element
  const imageGrid = document.getElementById("randomImageGrid");

  // Get all the image elements inside the container
  const images = Array.from(imageGrid.querySelectorAll("img"));

  // Shuffle the order of the images
  shuffleArray(images);

  // Remove all existing images from the grid
  imageGrid.innerHTML = "";

  // Append the shuffled images back to the grid with a smoother fade-in effect
  images.forEach(function (image, index) {
    image.style.opacity = 0;

    // Use requestAnimationFrame with a quadratic easing function for a smoother animation
    const fadeIn = () => {
      let currentOpacity = parseFloat(image.style.opacity);
      if (currentOpacity < 1) {
        image.style.opacity =
          currentOpacity + 0.01 * Math.pow(2, currentOpacity * 10);
        requestAnimationFrame(fadeIn);
      }
    };

    setTimeout(function () {
      imageGrid.appendChild(image);
      fadeIn();
    }, index * 30); // Adjust the delay as needed for a smoother fade-in
  });
});
