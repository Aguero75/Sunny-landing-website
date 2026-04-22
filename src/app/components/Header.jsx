import React from "react";

function Header() {
  return (
    <header class="hero">
      <div class="navbar">
        <div class="logo">
          <a href="/">
            <img src="images/logo.svg" alt="logo" />
          </a>
        </div>
        <button
          class="menu-toggle"
          id="menuToggle"
          aria-label="menu"
          aria-expanded="false"
        >
          <svg width="40" height="18" viewBox="0 0 40 18" fill="none">
            <rect width="40" height="2" fill="white" rx="1" />
            <rect y="8" width="40" height="2" fill="white" rx="1" />
            <rect y="16" width="40" height="2" fill="white" rx="1" />
          </svg>
        </button>
        <ul class="nav-links" id="navLinks">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#" class="contact-btn">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div class="hero-content">
        <h1>WE ARE CREATIVES</h1>
        <div class="arrow-down">
          <svg width="36" height="114" viewBox="0 0 36 114" fill="none">
            <path
              d="M18 2L18 112"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-dasharray="2 6"
            />
            <path
              d="M8 102L18 112L28 102"
              stroke="white"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
