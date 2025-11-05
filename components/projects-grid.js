// Projects Component
class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <section id="projects">
                <div class="container">
                    <h3>My Projects</h3>
                    <div class="grid">
                        <!-- Project cards will be added here by JavaScript -->
                    </div>
                </div>
            </section>
        `;

    // Add project cards
    const projectsGrid = this.querySelector('.grid');
    const projects = [
      {
        title: "Responsive Blog",
        description: "A fully responsive bitcoin blog build with Vanilla JS components.",
        image: "./images/bitBlog.svg",
        link: "https://emilyzugel.github.io/BitBlog/"
      },
      {
        title: "Log In Checkout",
        description: "A Web Page with log in checkout in JS.",
        image: "./images/pi-becker.png",
        link: "https://emilyzugel.github.io/guia-do-aprendiz/"
      },
      {
        title: "Simple Blockchain",
        description: "A simplified Blockchain web page build in JS.",
        image: "./images/simple-blockchain.png",
        link: "https://github.com/emilyzugel/simpleBlockchain/"
      },
      {
        title: "My Portifolio Code",
        description: "A fully responsive portifolio build with Vanilla JS components.",
        image: "./images/github-portifolio.png",
        link: "https://github.com/emilyzugel/portifolio"
      }
    ];

    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.link}" target="_blank" class="btn">See more</a>
                </div>
            `;
      projectsGrid.appendChild(projectCard);
    });
  }
}


// Register custom elements
customElements.define('projects-grid', Projects);
