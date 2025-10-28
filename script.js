// Navbar Component
class PortfolioNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <div class="nav-content">
                        <div class="logo">
                            <a href="index.html"><img src="./images/zg-logo.svg" class="nav-logo"></a>
                        </div>
                      <!--Desktop Menu-->
                        <ul class="nav-links">
                            <li class="scale"><a href="index.html">Projects</a></li>
                            <li class="scale"><a href="about.html">About</a></li>
                        </ul>
                      <!-- Hamburger Menu -->
                      <div class="hamburger">
                        <a class="hamburger-btn" onclick="menuPopUp()">☰</a>
                      </div>
                </div>
            </nav>
        `;
  }
}

class OffScreenMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <section class="offscreen-menu">
              <div class="offscreen-menu-list">
                <a class="close-btn scale-2" onclick="menuCloseBtn()">
                  <span>&#10006;</span>
                </a>
                <ul>
                  <li class="scale-2"><a href="index.html">Projects</a></li>
                  <li class="scale-2"><a href="about.html">About</a></li>
                </ul>
              </div>
            </section>
`
  }
}
// Open Menu Burger
function menuPopUp() {
  const menu = document.querySelector('.offscreen-menu');
  menu.classList.add('active');
}
// Close Menu Burger
function menuCloseBtn() {
  const menu = document.querySelector('.offscreen-menu');
  menu.classList.remove('active');
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menuCloseBtn();
  }
});




// Header Component
class PortfolioHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <section id="home" class="header">
                <div class="container">
                    <div class="header-content">
                        <div class="header-left scale">
                            <div class="header-img holographic-card">
                              <img src="./images/polygon-picture.svg"a alt="profile picture">
                            </div>
                            <div class="name-title">
                              <div class="firstname">Emily</div>
                              <div class="lastname">Zügel</div>
                            </div>
                        </div>
                        <div class="header-right">
                            <img src="./images/terminal.svg" alt="terminal">
                            <p class="line-1 anim-typewriter">&gt Web Dev / Linux / Design</p>
                            <div class="header-skills">
                              <p>MY SKILLS:</p>
                              <div class="skills-glass-wrapper">
                                <div class="glass scale" title="Arch Linux">
                                  <img src="./images/arch.svg" alt="arch icon">
                                </div>
                                <div class="glass scale" title="JavaScript">
                                  <img src="./images/javascript.svg" alt="javascript icon">
                                </div>
                                <div class="glass scale" title="NextJs">
                                  <img src="./images/nextjs.svg" alt="nextjs icon">
                                </div>
                                <div class="glass scale" title="Figma">
                                  <img src="./images/figma.svg" alt="figma icon">
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }
}

// Projects Component
class PortfolioProjects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <section id="projects">
                <div class="container">
                    <h3>My Projects</h3>
                    <div class="projects-grid">
                        <!-- Project cards will be added here by JavaScript -->
                    </div>
                </div>
            </section>
        `;

    // Add project cards
    const projectsGrid = this.querySelector('.projects-grid');
    const projects = [
      {
        title: "Responsive Blog",
        description: "A fully responsive portifolio build with Vanilla JS components.",
        image: "./images",
        link: ""
      },
      {
        title: "Tic-Tac-Toe Game",
        description: "A Web Tic Tac Toe Game build in JS.",
        image: "./images/Tic-Tac-Toe.png",
        link: "https://github.com/emilyzugel/JS-Tic-Tac-Toe"
      },
      {
        title: "Simple Blockchain",
        description: "A simplified Blockchain web page build in JS.",
        image: "./images/simple-blockchain.png",
        link: "https://github.com/emilyzugel/simpleBlockchain/"
      },
      {
        title: "Figma Delivery Prototype",
        description: "An mobile application design prototype build withy figma.",
        image: "./images/burguer-app.jpg",
        link: "https://www.figma.com/proto/TGdm1DvlzIgXDpfig7FyqV?node-id=0-1&t=avd1qbeSPRY2Q9iN-6"
      },
      {
        title: "My Portifolio Code",
        description: "A fully responsive portifolio build with Vanilla JS components.",
        image: "./images/github-portifolio.png",
        link: "https://github.com/emilyzugel/portifolio"
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


// Footer Component
class PortfolioFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                      <div class="footer-logo">
                        <a href="#">
                          <img src="./images/zg-logo.svg" alt="logo" height="100rem">
                        </a>
                       </div>
                        <div class="footer-social-media">
                            <p>Find me: </p>
                            <div class="footer-social-media">
                              <!--Linkedin Icon-->
                                <a class="social-media-icon" href="https://www.linkedin.com/in/emilyzugel/" target="_blank" title="emilyzugel">
                                 <img src="./images/linkedin-icon.svg" class="scale">
                                </a>
                              <!--Instagram Icon-->
                               <a class="social-media-icon" href="https://www.instagram.com/_zpicyy/" target="_blank" title="_zpicyy"> 
                                <img src="./images/instagram-icon.svg" class="scale">
                               </a>
                              <!--Github Icon-->
                              <a class="social-media-icon"a href="https://github.com/emilyzugel" target="_blank" title="emilyzugel">
                               <img src="./images/github-icon.svg" class="scale">
                             </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} Emily Zugel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
  }
}

// Register custom elements
customElements.define('portfolio-navbar', PortfolioNavbar);
customElements.define('offscreen-menu', OffScreenMenu);
customElements.define('portfolio-header', PortfolioHeader);
customElements.define('portfolio-projects', PortfolioProjects);
customElements.define('portfolio-footer', PortfolioFooter);

// Reload every 30 seconds
//setInterval(() => {
//  window.location.reload();
//}, 2000);
