// Header Component
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <section id="home" class="header">
                <div class="container">
                        <div class="left">
                            <div class="holographic-card">
                              <img src="./images/polygon-picture.svg"a alt="profile picture">
                            </div>
                            <div class="title">
                              <div class="firstname line-2 anim-typewriter2">Emily
                                <div class="lastname">Zügel</div>
                              </div>
                            </div>
                        </div>
                        <div class="right">
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
            </section>
        `;
  }
}


customElements.define('header-c', Header);

