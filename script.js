
// Smooth scroll to projects section
function scrollToProjects() {
  const projectsSection = document.getElementById('projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}

function goHome() {
// Navigate back to the landing page (index.html)
window.location.href = 'index.html';
}

function goCB() {
  // Navigate back to the landing page (index.html)
  window.location.href = 'project-details2.html';
  }

function openDetailsPage(projectId) {
  // Determine the project details file based on the project ID
  let projectDetailsFile = '';

  if (projectId === 1) {
    projectDetailsFile = 'project-details1.html';
  } else if (projectId === 2) {
    projectDetailsFile = 'project-details2.html';
  } else if (projectId === 3) {
    projectDetailsFile = 'project-details3.html';
  } else {
    // Handle invalid project ID
    console.error('Invalid project ID');
    return;
  }

  // Open the project details page
  window.open(projectDetailsFile, '_blank');
}

// Typing animation on navbar 

document.addEventListener("DOMContentLoaded", function() {
  const sequence = ["Hi, I'm Anna", 1000];
  const typingAnimationElement = document.getElementById('typing-animation');

  function typeText(text, delay) {
    let index = 0;

    function type() {
      if (index < text.length) {
        typingAnimationElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay / text.length);
      }
    }

    type();
  }

  typeText(sequence[0], sequence[1]);

  const hiAnnaElement = document.getElementById('typing-animation');

  hiAnnaElement.addEventListener('click', function() {
    window.location.href = './index.html';
  });
});


// Open social links
function openEmail() {
  window.open('mailto:annaphoenixg@gmail.com');
}

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/anna-gombay/');
}

function openGithub() {
  window.open('https://github.com/annagombay');
}