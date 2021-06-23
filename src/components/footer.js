import React, { Component } from "react"
import { Link } from "gatsby"

// Footer Koji light logo
import footer_logo from '../../static/img/general/logo-light.svg';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <img alt="footer-logo" className="footer-logo" src={footer_logo} />
            <div className="footer-group">
              <div className="collaborate-links">
                <p>Want to collaborate with us?</p>
                <p>Get in touch via <a href="mailto:hello@highdefinition.media">hello@highdefinition.media</a> or <a href="https://twitter.com/hd_eth" rel="noreferrer" target="_blank">@hd_eth on Twitter</a></p>
              </div>
              <div className="contact-links">
                <Link to="/contact">
                  <span>Contact Us</span>
                  <button aria-label="Contact Us" className="circle-btn sml"/>
                </Link>
                <Link to="/contact">
                  <span>Subscribe for Updates</span>
                  <button aria-label="Subscribe for Updates" className="circle-btn sml"/>
                </Link>
              </div>
            </div>
            <div className="site-links">
              <div className="link-box">
                <p className="title">Sitemap</p>
                <Link to="/investments">Investments</Link>
                <Link to="/read">Read</Link>
                <Link to="/listen">Listen</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="link-box">
                <p className="title">Socials</p>
                {/*<Link to="#empty" target="_blank" rel="noreferrer" >AngelList</Link>*/}
                <a href="https://linkedin.com/company/koji-capital/about/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://t.me/david_kji" target="_blank" rel="noreferrer" >Telegram</a>
                <a href="https://twitter.com/koji_capital" target="_blank" rel="noreferrer" >Twitter</a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;