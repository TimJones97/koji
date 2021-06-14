/* eslint-disable */
import React, { Component } from "react";
import { motion } from "framer-motion"

import Arrow from '../components/arrow';
import CircleNav from '../components/circlenav';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Footer from '../components/footer';

// Thesis videos
import Thesis_01 from '../../static/img/thesis/Thesis_01.mp4';
import Thesis_02 from '../../static/img/thesis/Thesis_02.mp4';
import Thesis_03 from '../../static/img/thesis/Thesis_03.mp4';
import Thesis_04 from '../../static/img/thesis/Thesis_04.mp4';
import Thesis_05 from '../../static/img/thesis/Thesis_05.mp4';

class About extends Component {
  render() {
    return (
      <>
        <Layout>
          <style type="text/css">{`
            html,
            body {
              overflow: hidden !important;
            }
          `}</style>
          <SEO title="About"/>
          <motion.div 
            initial={{
              opacity: 0,
              x: 200
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: 0
            }}
            transition={{
              ease: "easeOut",
              duration: 1
            }}
            className="circle-animator thesis"
            >
            <CircleNav location="thesis"/>
          </motion.div>
          <div className="thesis-anim">
            <section className="pp-section section-showcase thesis-page one light-nav" data-anchor="thesis-page1">
              <video muted loop="loop" autoPlay playsInline>
                <source src={Thesis_01} type="video/mp4" />
              </video>
              <div className="container">
                <motion.div 
                  initial={{
                    opacity: 0,
                    x: 100
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  exit={{
                    opacity: 0,
                    x: 0
                  }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.7,
                    delay: 1
                  }}
                  >
                  <header>
                    <h1>
                      Koji is an early-stage investment firm building the global financial stack. We inherit our values from our parent, <a className="orange" href="https://mycelium.ventures/" target="_blank">Mycelium.</a>
                    </h1>
                    <p>
                      The creation of the Internet was a seminal moment in the history of technology - it enabled the first communication and consensus formation between distributed computers. At the time of its inception, few could understand the value of a communications protocol for distributed machines. Today, it enables so many of our daily functions that we don't feel whole without it.
                    </p>
                  </header>
                </motion.div>
                <Arrow down anchor="thesis-page2"/>
              </div>
            </section>
            <section className="pp-section section-showcase thesis-page two" data-anchor="thesis-page2">
              <video muted loop="loop" autoPlay playsInline>
                <source src={Thesis_02} type="video/mp4" />
              </video>
              <div className="container">
                <header>
                  <h1>
                    These applications, together with the networks that enable them, form the global financial stack - a paradigm where assets are governed by globally accessible software.
                  </h1>
                  <p>
                    The creation of Bitcoin was a historic moment not only for computing, but for finance as well. Bitcoin was the first mechanism for the exchange of value over a communications channel with no trusted third party. The protocol replaced trust with cryptographic proof, enabling entirely digital transactions, requiring no approval by an appointed intermediary. The Ethereum protocol is an expansion upon this trustless digital payments system, incorporating a wider set of logic to allow new kinds of applications to be built. A native programming language enables developers to write arbitrary ‘smart contracts’ to form applications that were previously inconceivable.
                  </p>
                </header>
                <Arrow down anchor="thesis-page3"/>
              </div>
            </section>
            <section className="pp-section section-showcase thesis-page three light-nav" data-anchor="thesis-page3">
              <video muted loop="loop" autoPlay playsInline>
                <source src={Thesis_03} type="video/mp4" />
              </video>
              <div className="container">
                <header>
                  <h1>
                    The software programs that form the global financial stack are the first of their kind because they govern real value.
                  </h1>
                  <p>
                    Every transaction facilitated by a financial protocol appends the blockchain state, the ownership status of all assets within the network. By contrast, legacy payment rails do not govern the transfer of assets directly and are highly trust-dependent. They work by exchanging IOU's between banks, trusting them to achieve settlement. In this way, incumbent financial applications and services are merely new intermediaries unto an existing remittance layer. Financial protocols however, require only trust in the cryptography and game-theoretic incentives that support the network.  
                  </p>
                  <p>
                    Anyone with an internet connection can access applications built on the global financial stack. More still, because the smart-contract libraries are open and write access to the blockchain is free, anyone can contribute to improving it.
                  </p>
                </header>
                <Arrow down anchor="thesis-page4"/>
              </div>
            </section>
            <section className="pp-section section-showcase thesis-page four light-nav" data-anchor="thesis-page4">
              <video muted loop="loop" autoPlay playsInline>
                <source src={Thesis_04} type="video/mp4" />
              </video>
              <div className="container">
                <header>
                  <h1>
                    The global financial stack can be built without permission, but it is obsolete without a rich network of participants and supporting capital.
                  </h1>
                  <p>
                    Driving usership within the global financial stack requires not only loyal users at the application layer, but groups of incentivised participants, capital providers and governors to support the function of the protocols themselves.
                  </p>
                  <p>
                    Without a strong capital base to support them, financial protocols and the applications built on them are unusable. The presence of capital is entwined with the design of financial protocols themselves. More still, a network of active participants is vital to the early success of these protocols. Without engaged protocol governors oriented toward the protocol's long term goals, there can be little hope for a new financial ecosystem to emerge.
                  </p>
                </header>
                <Arrow down anchor="thesis-page5"/>
              </div>
            </section>
            <section className="pp-section pp-scrollable section-showcase thesis-page five contrast-nav-yellow" data-anchor="thesis-page5">
              <video muted loop="loop" autoPlay playsInline>
                <source src={Thesis_05} type="video/mp4" />
              </video>
              <div className="container">
                <header>
                  <h1>
                    Koji provides growth-capital to drive the adoption of a new generation of applications.
                  </h1>
                  <p>
                    Supporting the development of new components of the global financial stack requires more than just capital at risk. We support projects by providing capital and participating during their most vital growth phase. In this way, we are not only investing in but building the global financial stack. 
                  </p>
                  <h1>
                    If you are too, we'd love to talk.
                  </h1>
                </header>
              </div>
              <Footer/>
            </section>
          </div>
        </Layout>
      </>
    );
  }
}

export default About;