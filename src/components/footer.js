/* eslint-disable */
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <img className="footer-logo" src="/img/general/logo-light.svg" />
            <div className="footer-group">
              <div className="collaborate-links">
                <p>Want to collaborate with us?</p>
                <p>Get in touch via <a href="mailto:hello@highdefinition.media">hello@highdefinition.media</a> or <a href="https://twitter.com/hd_eth" target="_blank">@hd_eth on Twitter</a></p>
              </div>
              <div className="contact-links">
                <a href="#">
                  Contact Us
                </a>
                <a href="#">
                  Subscribe for Updates
                </a>
              </div>
            </div>
            <div className="site-links">
              <div className="link-box">
                <p className="title">Sitemap</p>
                <a href="#">Investments</a>
                <a href="#">Read</a>
                <a href="#">Listen</a>
                <a href="#">Contact</a>
              </div>
              <div className="link-box">
                <p className="title">Socials</p>
                <a href="#">AngelList</a>
                <a href="#">LinkedIn</a>
                <a href="#">Telegram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;