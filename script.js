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

  // Append the shuffled images back to the grid
  images.forEach(function (image) {
    imageGrid.appendChild(image);
  });
});
