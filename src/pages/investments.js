/* eslint-disable */
import React, { Component } from "react";
import SEO from '../components/seo';
import Layout from '../components/layout';

// Investment logos
import transak_logo from '../../static/img/investments/transak.svg';
import monk_logo from '../../static/img/investments/monk.svg';
import glimpse_logo from '../../static/img/investments/glimpse.svg';
import maple_logo from '../../static/img/investments/maple.svg';
import lao_logo from '../../static/img/investments/lao.svg';
import consensys_logo from '../../static/img/investments/consensys.svg';
import flamingo_logo from '../../static/img/investments/flamingo.svg';

class Investments extends Component {
  render() {
    return (
      <>
        <Layout>
          <style type="text/css">{`
            body {
              background: #000;
            }
            ::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 1);
            }
          `}</style>
          <SEO title="Investments"/>
          <section className="normal-section investments light-nav contrast-nav">
            <div className="container">
              <span className="subheading">INVESTMENTS</span>
              <div className="investment">
                <picture>
                  <img src={transak_logo}/>
                </picture>
                <p>Transak</p>
                <p>20XX partnership.</p>
                <p>Transak is your fiat gateway to DeFi.</p>
              </div>
              <div className="investment">
                <picture>
                  <img src={monk_logo}/>
                </picture>
                <p>Monk</p>
                <p>20XX partnership.</p>
                <p>Monk is the stack orchestration platform allowing anyone to compose, deploy and manage full-stacks with near-zero devops overhead.</p>
              </div>
              <div className="investment">
                <picture>
                  <img src={glimpse_logo}/>
                </picture>
                <p>Glimpse Protocol</p>
                <p>20XX partnership.</p>
                <p>Glimpse Protocol is a privacy-preserving ad platform for the post-cookie web.</p>
              </div>
              <div className="investment">
                <picture>
                  <img src={maple_logo}/>
                </picture>
                <p>Maple</p>
                <p>20XX partnership.</p>
                <p>Maple is a decentralised corporate credit market built on the Ethereum blockchain..</p>
              </div>
              <div className="investment">
                <picture>
                  <img src={lao_logo}/>
                </picture>
                <p>The LAO</p>
                <p>20XX partnership.</p>
                <p>'The LAO' is a for-profit Decentralised Autonomous Organisation (DAO) supporting the development of the Ethereum ecosystem.</p>
              </div>
              <div className="investment">
                <picture>
                  <img src={consensys_logo}/>
                </picture>
                <p>Consensys</p>
                <p>20XX partnership.</p>
                <p>Consensys is a market-leading Ethereum-focused software company.</p>
              </div>
              <div className="investment">
                <picture>
                  <img src={flamingo_logo}/>
                </picture>
                <p>Flamingo</p>
                <p>20XX partnership.</p>
                <p>Flamingo is a DAO, incubated by the LAO community supporting the expanding NFT metaverse.</p>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default Investments;