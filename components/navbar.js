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


customElements.define('navbar-c', PortfolioNavbar);
customElements.define('offscreen-menu', OffScreenMenu);
