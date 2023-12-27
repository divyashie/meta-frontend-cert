const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    /* Footer styles */
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      margin: 0;
    }

    article {
      margin: auto 0;
    }

    footer {
      background-color: teal;
      color: #fff;
      text-align: center;
      padding: 20px;
      position: fixed;
      width: 100%;
      bottom: 0;
    }

    /* Company Info Container */
    .company-info {
      margin-bottom: 20px;
    }

    /* Social Links Container */
    .social-links {
      margin-top: 10px;
    }

    .social-links a {
      color: #fff;
      margin: 0 10px;
      text-decoration: none;
    }

    /* Navigation Container */
    nav {
      background-color: #444;
      padding: 10px;
      text-align: center;
    }

    nav a {
      color: #fff;
      margin: 0 10px;
      text-decoration: none;
    }

    /* Lemon Slice Animation */
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .lemon {
      width: 100px;
      height: 100px;
      background-color: #fbd33d; /* Lemon color */
      border-radius: 50%;
      position: relative;
      overflow: hidden;
    }

    .lemon-slice {
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid #fbd33d; /* Lemon color */
      position: absolute;
      bottom: 0;
      left: 25px;
      transform-origin: 50% 0;
      animation: rotate 5s infinite linear;
    }
  </style>
  <!-- Footer Container -->
  <footer>

    <!-- Company Info Container -->
    <div class="company-info">
      <h2>Little Lemon</h2>
      <p>200 N Michigan Ave, Chicago, IL, 60601, USA</p>
      <p>Phone: +200 123 456 789 
      <p>Email: little-lemon@email.com
    </div>

    <div class="social-links">
      <a href="https://www.facebook.com" target="_blank"><img src="../src/images/facebook.png" alt="Facebook"></a>
      <a href="https://www.twitter.com" target="_blank"><img src="../src/images/twitter.png" alt="Twitter"></a>
      <a href="https://instagram.com" target="_blank"><img src="../src/images/instagram.png" alt="Instagram"></a>
      <!-- Add more social media links as needed -->
    </div>
  </footer>
`; 

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

customElements.define('footer-component', Footer);

