
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) {
    window.location.href = 'index.html#' + id;
    return;
  }
  const navHeight = document.querySelector('header').offsetHeight;
  const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

function scrollToProjects() {
  scrollToSection('projects');
}

function scrollToAbout() {
  scrollToSection('about');
}

document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    setTimeout(function () { scrollToSection(hash); }, 100);
  }
});

function goHome() {
  window.location.href = 'index.html';
}

function toggleNav() {
  document.querySelector('.navLinks').classList.add('nav-animating');
  document.body.classList.toggle('nav-open');
}

function closeNav() {
  document.body.classList.remove('nav-open');
}

function goCB() {
  // Navigate back to the landing page (index.html)
  window.location.href = 'chatrbot-case-study.html';
  }

function openDetailsPage(projectId) {
  // Determine the project details file based on the project ID
  let projectDetailsFile = '';

  if (projectId === 1) {
    projectDetailsFile = 'oknotok-case-study.html';
  } else if (projectId === 2) {
    projectDetailsFile = 'chatrbot-case-study.html';
  } else if (projectId === 3) {
    projectDetailsFile = 'esr-case-study.html';
  } else if (projectId === 4) {
    projectDetailsFile = 'occt-case-study.html';
  } else {
    // Handle invalid project ID
    console.error('Invalid project ID');
    return;
  }

  // Open the project details page
  window.open(projectDetailsFile, '_self');
}

// Open social links
function openEmail() {
  window.open('mailto:annagombay1@gmail.com');
}

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/anna-gombay/');
}

function openGithub() {
  window.open('https://github.com/annagombay');
}