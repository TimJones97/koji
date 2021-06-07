/* eslint-disable */
import React, { Component } from "react";
import Footer from '../components/footer';
import Episode from '../components/episode';
import Socials from '../components/socials';

// Image and video assets
import arrow from '../../static/img/general/arrow-down.svg';
import homepage_01 from '../../static/img/home-page/Homepage_01.mp4';
import homepage_02 from '../../static/img/home-page/Homepage_02.mp4';
import hd_logo from '../../static/img/listen/high-definition-logo.svg';
import hd_background from '../../static/img/home-page/hd-elements/high-definition-bg.jpg';
import circle_red from '../../static/img/home-page/hd-elements/circle-red.svg';
import circle_orange from '../../static/img/home-page/hd-elements/circle-orange.svg';
import circle_white from '../../static/img/home-page/hd-elements/circle-white.svg';

class Homepage extends Component {
  render() {
    return (
      <>
        <main id="homepage-anim">
          <section className="pp-section banner section-showcase light-nav" data-anchor="page1">
            <div className="container">
              <header>
                <h1>
                  <span>Koji is an early-stage</span>
                  <span>investment firm building</span>
                </h1>
                <span className="inline">the </span><a className="link-white go-thesis" data-menuanchor="thesis-page1" href="#thesis-page1">Global Financial Stack<button role="button" className="circle-btn" /></a>
              </header>
              <a className="arrow-down nav-link" data-menuanchor="page2" href="#page2">
                <img src={arrow} />
              </a>
            </div>
            <video muted loop="loop" autoPlay playsInline>
              <source src={homepage_01} type="video/mp4" />
            </video>
          </section>
          <section className="pp-section section-showcase about" data-anchor="page2">
            <div className="container">
              <header>
                <span className="subheading">ABOUT</span>
                <h1>
                  <span>We believe blockchain technology is shaking the foundations of traditional internet infrastructure, clearing way for a new era of capitalism.</span>
                </h1>
                <a className="link-white" href="/investments">Read More<button role="button" className="circle-btn" /></a>
              </header>
              <a className="arrow-down nav-link" data-menuanchor="page3" href="#page3">
                <img src={arrow} />
              </a>
            </div>
            <video muted loop="loop" autoPlay playsInline>
              <source src={homepage_02} type="video/mp4" />
            </video>
          </section>
          <section className="pp-section section-showcase highdef light-nav" data-anchor="page3">
            <div className="container">
              <header>
                <img className="highdef-logo" src={hd_logo} />
                <span className="subheading">LISTEN</span>
                <h1>
                  <span>Illuminating the motives&nbsp;</span><span>behind the person.</span>
                </h1>
                <a className="link-white" href="/listen">Listen to their journeys<button role="button" className="circle-btn" /></a>
              </header>
              <div className="episodes">
                <span className="subheading">RECENT EPISODES</span>
                <Episode small/>
                <Episode small/>
                <a className="link-white" href="/listen">View all Episodes<button role="button" className="circle-btn"/></a>
              </div>
              <a className="arrow-down nav-link" data-menuanchor="page4" href="#page4">
                <img src={arrow} />
              </a>
            </div>
            <div className="graphics">
              <div className="highdef-bg">
                <img src={hd_background} />
              </div>
              <img className="circle-red" src={circle_red} />
              <img className="circle-orange" src={circle_orange} />
              <img className="circle-white" src={circle_white} />
            </div>
          </section>
          <section className="pp-section pp-scrollable section-showcase contact light-nav contrast-nav hide-circles-mobile" data-anchor="page4">
            <div className="container">
              <div className="left">
                <header>
                  <span className="subheading">CONTACT</span>
                  <h1>
                    Get in touch.
                  </h1>
                </header>
                <Socials/>
              </div>
              <div className="right">
                <form className="contact-form" action="https://formspree.io/f/mrgrprod" method="POST">
                  <div className="form-item half">
                    <label>FIRST NAME</label>
                    <input placeholder="First name" name="first_name" type="text" required />
                  </div>
                  <div className="form-item half">
                    <label>LAST NAME</label>
                    <input placeholder="Last name" name="last_name" type="text" required />
                  </div>
                  <div className="form-item">
                    <label>COMPANY</label>
                    <input placeholder="Company name" name="company" type="text" required />
                  </div>
                  <div className="form-item">
                    <label>EMAIL</label>
                    <input placeholder="Email address" name="email" type="email" required />
                  </div>
                  <div className="form-item">
                    <label>SUBJECT</label>
                    <input placeholder="Write your subject line here..." name="subject" type="text" required />
                  </div>
                  <div className="form-item">
                    <label>SUBJECT</label>
                    <textarea placeholder="Write your message here..." name="subject" type="text" required defaultValue={""} />
                  </div>
                  <button type="submit">SEND</button>
                </form>
              </div>
              <Socials mobile/>
            </div>
            <Footer />
          </section>
        </main>
      </>
    );
  }
}

export default Homepage;