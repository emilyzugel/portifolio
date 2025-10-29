// About Page
class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="about">
        <div class="container">
          <div class="title">
            <h2>About me:</h2>
            <h3>Code, Design, and a Dash of Chaos</h3>
          </div>
          <div class="code">
            <p>
              Hi there! I'm a Junior Developer currently diving deep into the world of Analysis and Development of Systems. My main playground is the JavaScript ecosystem, where I'm constantly building my skills in React.js and Next.js to create fast, modern web experiences.
            </p>
          </div>
          <div class="design">
            <p>
                But here's where the real magic happens for me: I am passionate about styling and see it as the art of seasoning a solid codebase with beautiful design. While the functionality is the foundation, the CSS is what makes the experience memorable. I get a kick out of transforming a working component into something that's not just usable, but a genuine pleasure to look at and interact with.
            </p>
          </div>
          <div class="linux">
            <p>
              When I'm not obsessed with pixel-perfect design, you'll find me in the terminal, writing scripts and automating everything in my Arch Linux setup. I'm a self-taught Linux enthusiast who's fallen in love with the power of automation. Why do something twice when you can write a script to do it forever?
            </p>
          </div>
        </div>
      </section> 
   `
  }
}

customElements.define('about-c', About);
