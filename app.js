// Function to display images in gallery
function displayImages(images) {
  const gallery = document.getElementById("dog-gallery");
  gallery.innerHTML = ""; // Clear existing images

  images.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    img.className = "dog-img";
    gallery.appendChild(img);
  });
}

// Fetch 5 random images
async function fetchRandomImages() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/5");
  const data = await res.json();
  displayImages(data.message);
}

// Fetch images by breed
async function fetchBreedImages() {
  const breed = document.getElementById("breed-input").value.toLowerCase();
  if (!breed) {
    alert("Please enter a breed name!");
    return;
  }
  try {
    const res = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/5`
    );
    const data = await res.json();
    if (data.status === "error") {
      alert("Breed not found. Try a valid breed.");
      return;
    }
    displayImages(data.message);
  } catch (err) {
    alert("Something went wrong while fetching images.");
    console.error(err);
  }
}

// Load initial random images
fetchRandomImages();
