// Registration and Login Form Functions
function showRegistrationForm() {
  document.getElementById("registration-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("registration-form").style.display = "none";
}

// Image Slideshow Function
const images = [
  "/Images/123.jpg",
  "/Images/456.jpg",
  "/Images/789.jpg"
];

let currentIndex = 0;

function showImage() {
  const img = document.querySelector(".product img");
  const h3 = document.querySelector(".product h3");
  const buyNow = document.querySelector("#buy-now");
  
  img.src = images[currentIndex];
  
  switch (currentIndex) {
    case 0:
      h3.textContent = "Acoustic";
      buyNow.href = "#";
      buyNow.textContent = "$1000 - Buy Now";
      break;
    case 1:
      h3.textContent = "Electric";
      buyNow.href = "#";
      buyNow.textContent = "$1200 - Buy Now";
      break;
    case 2:
      h3.textContent = "Amplifier";
      buyNow.href = "#";
      buyNow.textContent = "$600 - Buy Now";
      break;
    default:
      break;
  }
  
  currentIndex++;
  
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// Timer Function for Image Slideshow
setInterval(showImage, 3000);
