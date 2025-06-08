document.getElementById('toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
});


// projects upload from json:
  fetch('projects.json')
    .then(response => response.json())
    .then(data => {
      const projectsSection = document.getElementById('projects-list');

      data.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-item');

        projectDiv.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectsSection.appendChild(projectDiv);
      });
    })
    .catch(error => {
      console.error('Error loading projects:', error);
    });