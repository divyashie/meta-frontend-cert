const headerTemplate = document.createElement('template'); 
headerTemplate.innerHTML = `
            <style>
                body {
                    margin: 0; /* Remove default margin */
                    padding: 0; /* Remove default padding */
                }

                nav {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    min-height: 8vh;
                    background-color: teal;
                    font-family: "Montserrat", sans-serif;
                }

                .heading {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                }
                
                .heading h4 {
                    color: white;
                    text-transform: uppercase; 
                    letter-spacing: 5px; 
                    font-size: 20px;
                }
                .heading img {
                    display: inline-block;
                    height: 96px;
                    position: relative;
                    margin-right: 10px;
                    animation: bounce 1s infinite alternate;
                }

                @keyframes bounce {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-10px);
                    }
                }

                .nav-links {
                    display: flex;
                    justify-content: space-around;
                    align-items: center; /* Align items vertically */
                    width: 30%;
                    margin-left: auto; /* Push the nav-links to the right */
                }

                .nav-links li {
                    list-style: none;
                }

                .nav-links a {
                    color: white;
                    text-decoration: none;
                    letter-spacing: 3px;
                    font-weight: bold;
                    font-size: 14px;
                    padding: 14px 16px;
                    display: flex;
                    align-items: center; /* Align items vertically */
                }

                .nav-links a:hover:not(.active) {
                    background-color: lightseagreen;
                }

                .nav-links li a.active {
                    background-color: #4caf50;
                }
            </style>
            <header>
                <div class="heading">
                    <img src="../src/images/logo.png" alt="Little Lemon Restaurant">
                    <h4>Little Lemon Restaurant</h4>
                </div>
                <nav>
                    <ul class="nav-links">
                        <li>
                            <a class="active" href="home.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="menus.html">
                                Menus
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
  
      shadowRoot.appendChild(headerTemplate.content);
    }
  }
    
customElements.define('header-component', Header);
