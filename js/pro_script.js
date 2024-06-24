
function about(a)
{
  const section = document.getElementById(a);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
}

function redirectToPageh() {
    window.location.href = './index.html';
  }

function redirectToPages() {
    window.location.href = './profile.html';
  }

  