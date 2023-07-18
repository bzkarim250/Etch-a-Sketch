function createPixels(size) {
  let container = document.querySelector(".container");
  for (currentPixel = 0; currentPixel < size * size; currentPixel++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.addEventListener("pointerover", addRgb);
    container.appendChild(pixel);
  }
}

createPixels(16);

function addRgb(e) {
  e.target.style = `background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  e.target.removeEventListener("pointerover", addRgb);
}

function resetContainer() {
  let container = document.querySelector(".container");
  container.innerHTML = ""; // Clear the container

  let size = 16; // Set the desired size
  createPixels(size); // Recreate the pixels
}


