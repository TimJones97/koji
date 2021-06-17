/* eslint-disable */
import React, { Component } from 'react';
import { Link } from "gatsby"
import { motion } from "framer-motion"

// Components
import Arrow from '../components/arrow';
import CircleNav from '../components/circlenav';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Episode from '../components/episode';
import Socials from '../components/socials';
import Footer from '../components/footer';

// Image and video assets
import homepage_01 from '../../static/img/home-page/Homepage_01.mp4';
import homepage_02 from '../../static/img/home-page/Homepage_02.mp4';
import hd_logo from '../../static/img/listen/high-definition-logo.svg';
import hd_background from '../../static/img/home-page/hd-elements/high-definition-bg.jpg';
import circle_red from '../../static/img/home-page/hd-elements/circle-red.svg';
import circle_orange from '../../static/img/home-page/hd-elements/circle-orange.svg';
import circle_white from '../../static/img/home-page/hd-elements/circle-white.svg';

class Index extends Component {
  constructor (props){
    super(props);
    this.fadeInVideoLoaded = this.fadeInVideoLoaded.bind(this);
  }

  fadeInVideoLoaded(e){
    e.target.classList.add('loaded');
  }
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home"/>
          <style type="text/css">{`
            html,
            body {
              overflow: hidden !important;
            }
            ::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 1);
            }
            /* Show the footer that is inside the Pagepiling element
               but not the one outside of it */
            footer {
              display: none;
            }
            .contact footer {
              display: block;
            }
          `}</style>
          <motion.div 
            initial={{
              opacity: 0,
              x: -150
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -150
            }}
            transition={{
              ease: "easeOut",
              duration: 1.5
            }}
            className="circle-animator"
            >
            <CircleNav location="home"/>
          </motion.div>
          <motion.div 
            initial={{
              opacity: 1,
              x: 0
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -150
            }}
            transition={{
              ease: "easeOut",
              duration: 1.5
            }}
          >
            <div className="homepage-anim">
              <section className="pp-section banner active section-showcase light-nav" data-anchor="page1">
                <div className="container">
                  <header>
                    <motion.h1
                      initial={{
                        opacity: 0,
                        x: 0
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      exit={{
                        opacity: 0,
                        x: -100
                      }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5
                      }}
                    >
                      <span>Koji is an early-stage</span>
                      <span>investment firm building</span>
                      <span className="inline">the </span><Link className="link-white" data-menuanchor="thesis-page1" to="/about">global financial stack<button role="button" className="circle-btn" /></Link>
                    </motion.h1>
                  </header>
                  <Arrow down anchor="page2" type="orange"/>
                </div>
                <video muted loop="loop" onCanPlay={e => this.fadeInVideoLoaded(e)} autoPlay playsInline>
                  <source src={homepage_01} type="video/mp4" />
                </video>
              </section>
              <section className="pp-section section-showcase about" data-anchor="page2">
                <div className="container">
                  <header>
                    <span className="subheading">ABOUT</span>
                    <h1>
                      <span>We provide growth-capital to drive the adoption of a new generation of applications.</span>
                    </h1>
                    <Link className="link-white hover-black" to="/investments">Read More<button role="button" className="circle-btn md" /></Link>
                  </header>
                  <Arrow down anchor="page3" type="black"/>
                </div>
                <video muted loop="loop" onCanPlay={e => this.fadeInVideoLoaded(e)} autoPlay playsInline>
                  <source src={homepage_02} type="video/mp4"/>
                </video>
              </section>
              <section className="pp-section section-showcase highdef light-nav" data-anchor="page3">
                <div className="container">
                  <div className="top">
                    <img className="highdef-logo" src={hd_logo} />
                  </div>  
                  <div className="bottom">
                    <header>
                      <span className="subheading">LISTEN</span>
                      <h1>
                        <span>Illuminating the motives&nbsp;</span><span>behind the person.</span>
                      </h1>
                      <Link className="link-white" to="/listen">Listen to their journeys<button role="button" className="circle-btn md" /></Link>
                    </header>
                    <div className="episodes">
                      <span className="subheading">RECENT EPISODES</span>
                      <Episode small/>
                      <Episode small/>
                      <Link className="link-white" to="/listen">View all Episodes<button role="button" className="circle-btn md"/></Link>
                    </div>
                    <Arrow down anchor="page4" type="orange"/>
                  </div>  
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
                    <Arrow up anchor="page3" type="orange"/>
                    <header>
                      <span className="subheading">CONTACT</span>
                      <h1>
                        Get in touch.
                      </h1>
                    </header>
                    <Socials/>
                  </div>
                  <div className="right">
                    <form className="contact-form" method="POST">
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
                  <Socials mobileSml/>
                </div>
                <Footer/>
              </section>
            </div>
          </motion.div>
        </Layout>
      </>
    )
  }
}

export default Index;