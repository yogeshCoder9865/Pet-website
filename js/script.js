let slideIndex = 0;

function moveSlides(n) {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  slideIndex = (slideIndex + n + totalSlides) % totalSlides;

  track.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function redirectToPage() {
  window.location.href = './signup.html';
}
function pro_start() {
  window.location.href = './product.html';
}

function redirectToTargetPage() {
  window.location.href = './product.html#target-block';
}
function redirectToTargetPage1() {
  window.location.href = './product.html#target-block1';
}
function redirectToTargetPage2() {
  window.location.href = './product.html#target-block2';
}


function about(a)
{
  const section = document.getElementById(a);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
      document.getElementById('intro-slide').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
  }, 5000); 
});

