// Thumbnail Image Switch
function changeImage(img) {
  document.getElementById('mainImage').src = img.src;
}

// Modal Functions
function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close modal on click outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
};

// Close modal on ESC
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Tabs
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

// Color and Size Variants
function selectColor(color) {
  localStorage.setItem('selectedColor', color);
  alert("Color selected: " + color);
}

function selectSize(select) {
  localStorage.setItem('selectedSize', select.value);
  alert("Size selected: " + select.value);
}

// Rating System
function rate(stars) {
  localStorage.setItem('rating', stars);
  setRating(stars);
}

function setRating(stars) {
  const starsEls = document.querySelectorAll('.rating span');
  starsEls.forEach((star, index) => {
    if (index < stars) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
  document.getElementById('rating-value').innerText = `(${stars}/5)`;
}

// Load saved rating on page load
window.onload = function() {
  const savedRating = localStorage.getItem('rating');
  if (savedRating) {
    setRating(parseInt(savedRating));
  }
};
