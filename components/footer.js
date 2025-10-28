// Footer Component
class Footer extends HTMLElement {
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
customElements.define('footer-c', Footer);
