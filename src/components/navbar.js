/* eslint-disable */
import React, { Component } from "react";
import { Link, Navigate } from "gatsby"
import PropTypes from "prop-types"
// import TransitionLink from 'gatsby-plugin-transition-link'

// Icon assets
import logo_light from '../../static/img/general/logo-light.svg'
import logo_dark from '../../static/img/general/logo-dark.svg'
import close_btn from '../../static/img/general/close.svg'
import angelist_icon from '../../static/img/social-icons/angelist.svg'
import linkedin_icon from '../../static/img/social-icons/linkedin.svg'
import telegram_icon from '../../static/img/social-icons/telegram.svg'
import twitter_icon from '../../static/img/social-icons/twitter.svg'

const routes = [
  { to: '/about', label: 'About' },
  { to: '/investments', label: 'Investments' },
  { to: '/read', label: 'Read' },
  { to: '/listen', label: 'Listen' },
  { to: '/contact', label: 'Contact' }
];

class Navbar extends Component {
  links() {
    let navLinks = routes.map(({ to, label, index }) => {
      return (
        <>
          <li className="nav-item" key={index}>
            <Link className="nav-link" data-text={label} to={to}>{label}</Link>
          </li>
        </>
      )
    });
    return navLinks;
  }
  render() {
    return (
      <nav className={this.props.type}>
        <div className="container">
          <Link className="logo nav-link" to='/'>
            <img className="light" src={logo_light} />
            <img className="dark" src={logo_dark} />
          </Link>
          <div className="right-nav">
            <ul>
              {this.links()}
            </ul>
          </div>
          <a className="menu-toggle">
            <button className="nav-btn">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </a>
        </div>
        <menu className="mobile-nav">
          <span className="menu-text">Menu</span>
          <a className="close-btn">
            <img src={close_btn}/>
          </a>
          <div className="mobile-nav__items">
            <ul>
              {this.links()}
              <li className="nav-item">
              </li>
            </ul>
            <div className="mobile-socials">
              <a className="social-link" href="#">
                <picture>
                  <img src={angelist_icon}/>
                </picture>
              </a>
              <a className="social-link" href="#">
                <picture>
                  <img src={linkedin_icon}/>
                </picture>
              </a>
              <a className="social-link" href="#">
                <picture>
                  <img src={telegram_icon}/>
                </picture>
              </a>
              <a className="social-link" href="#">
                <picture>
                  <img src={twitter_icon}/>
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
