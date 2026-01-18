// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Gallery lightbox
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

galleryImages.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  };
});

closeBtn.onclick = () => {
  lightbox.style.display = 'none';
};
function logout() {
  alert("Logout successful");
}

function services() {
  window.location.href = "logout.html";
}// Go back to previous page
function goBack() {
  window.history.back();
}

// Open service detail page
function openService() {
  window.location.href = "service-detail.html";
}

