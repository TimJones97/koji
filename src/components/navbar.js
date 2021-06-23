import React, { Component } from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"

//Icon assets
import logo_light from '../../static/img/general/logo-light.svg'
import logo_dark from '../../static/img/general/logo-dark.svg'
import close_btn from '../../static/img/general/close.svg'
// import angelist_icon from '../../static/img/social-icons/angelist.svg'
import linkedin_icon from '../../static/img/social-icons/linkedin.svg'
import telegram_icon from '../../static/img/social-icons/telegram.svg'
import twitter_icon from '../../static/img/social-icons/twitter.svg'


//Temporary 
import Thesis_05 from '../../static/img/thesis/Thesis_05.mp4';

const routes = [
  { to: '/about', label: 'About' },
  { to: '/investments', label: 'Investments' },
  //{ to: '/read', label: 'Read' },
  { to: '/listen', label: 'Listen' },
  { to: '/contact', label: 'Contact' }
];

class Navbar extends Component {
  links() {
    let navLinks = routes.map(({ to, label }) => {
      return (
        //Use react fragment to bypass non-unique key error
        <React.Fragment key={ Math.random().toString(36).substr(2, 9) }>
          <li className="nav-item">
            <Link className="nav-link" to={to}>{label}</Link>
          </li>
        </React.Fragment>
      )
    });
    return navLinks;
  }
  render() {
    return (
      <nav className={this.props.type}>
        <video className="thesis-five__video" muted loop="loop" autoPlay playsInline>
          <source src={Thesis_05} type="video/mp4" />
        </video>
        <div className="container">
          <Link className="logo nav-link" to="/">
            <img alt="Koji logo white" className="light" src={logo_light} />
            <img alt="Koji logo brown" className="dark" src={logo_dark} />
          </Link>
          <div className="right-nav">
            <ul>
              {this.links()}
            </ul>
          </div>
          <span className="menu-toggle">
            <button className="nav-btn">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </span>
        </div>
        <menu className="mobile-nav">
          <span className="menu-text">Menu</span>
          <button className="close-btn">
            <img alt="Close button" src={close_btn}/>
          </button>
          <div className="mobile-nav__items">
            <ul>
              {this.links()}
              <li className="nav-item">
              </li>
            </ul>
            <div className="mobile-socials">
              {/*<a className="social-link" target="_blank" rel="noreferrer" href="#empty">
                <picture>
                  <img alt="Angelist icon" src={angelist_icon}/>
                </picture>
              </a>*/}
              <a className="social-link" target="_blank" rel="noreferrer" href="https://linkedin.com/company/koji-capital/about/">
                <picture>
                  <img alt="LinkedIn icon" src={linkedin_icon}/>
                </picture>
              </a>
              <a className="social-link" target="_blank" rel="noreferrer" href="https://t.me/david_kji">
                <picture>
                  <img alt="Telegram icon" src={telegram_icon}/>
                </picture>
              </a>
              <a className="social-link" target="_blank" rel="noreferrer" href="https://twitter.com/koji_capital">
                <picture>
                  <img alt="Twitter icon" src={twitter_icon}/>
                </picture>
              </a>
            </div>
          </div>
        </menu>
      </nav>
    );
  }
}

Navbar.propTypes = {
  type: PropTypes.string,
}

export default Navbar;
