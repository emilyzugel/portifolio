// Design Page
class Design extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <main class="design">
            
            <section class="hero">
                <div class="container">
                  <div class="waves"></div>
                  <div class="content">
                    <img class="figma-3d" src="./images/figma-3d.png">
                    <div class="hero-text">
                      <h2>Zg's Designs</h2>
                      <p>
                        Here a collection of my Figma designs: 
                        where UX takes place, UI makes it beauty 
                        and &lt code &gt makes it real!
                      </p>
                    </div>
                  </div>
                </div>
            </section>

              <section id="projects">
                <div class="container">
                    <h3>My Designs</h3>
                    <div class="grid">
                        <!-- Project cards will be added here by JavaScript -->
                    </div>
                </div>
              </section>

          </main>
        `;

    // Add project cards
    const projectsGrid = this.querySelector('.grid');
    const projects = [
      {
        title: "Figma Delivery Prototype",
        description: "An mobile application design prototype build withy figma.",
        image: "./images/burguer-app.jpg",
        link: "https://www.figma.com/proto/TGdm1DvlzIgXDpfig7FyqV?node-id=0-1&t=avd1qbeSPRY2Q9iN-6"
      },
      {
        title: "My Portifolio - Figma",
        description: "A fully responsive portifolio prototype build with Figma.",
        image: "./images/portifolio-figma.png",
        link: "https://www.figma.com/design/h29JyLzFjw3Lz8PiPxVhm9/zg-portifolio?node-id=0-1&t=lEPTbROfwI5cGBgu-1"
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

customElements.define('design-c', Design);
