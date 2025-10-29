// Footer Component
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="top-wrapper">
                        <a class="logo-wrapper" href="https://emilyzugel.github.io/portifolio/">
                          <img  class="logo" src="./images/zg-logo.svg" alt="zg's logo">
                        </a>
                            <div class="social-media">
                              <p>Find me: </p>
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
                    <div class="bottom-wrapper">
                        <p>&copy; ${new Date().getFullYear()} Emily Zugel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
  }
}

// Register custom elements
customElements.define('footer-c', Footer);
