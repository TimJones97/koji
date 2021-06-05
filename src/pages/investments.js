import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const Investments = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <section className="investment">
        <div className="container">
          <span className="subheading">INVESTMENTS</span>
          <div className="investment">
            <picture>
              <img src="/img/investments/transak.svg"/>
            </picture>
            <span><b>Transak</b></span>
            <p>20XX partnership.</p>
            <p>Transak is your fiat gateway to DeFi.</p>
          </div>
          <div className="investment">
            <picture>
              <img src="/img/investments/monk.svg"/>
            </picture>
            <span><b>Monk</b></span>
            <p>20XX partnership.</p>
            <p>Monk is the stack orchestration platform allowing anyone to compose, deploy and manage full-stacks with near-zero devops overhead.</p>
          </div>
          <div className="investment">
            <picture>
              <img src="/img/investments/glimpse.svg"/>
            </picture>
            <span><b>Glimpse Protocol</b></span>
            <p>20XX partnership.</p>
            <p>Glimpse Protocol is a privacy-preserving ad platform for the post-cookie web.</p>
          </div>
          <div className="investment">
            <picture>
              <img src="/img/investments/maple.svg"/>
            </picture>
            <span><b>Maple</b></span>
            <p>20XX partnership.</p>
            <p>Maple is a decentralised corporate credit market built on the Ethereum blockchain..</p>
          </div>
          <div className="investment">
            <picture>
              <img src="/img/investments/lao.svg"/>
            </picture>
            <span><b>The LAO</b></span>
            <p>20XX partnership.</p>
            <p>'The LAO' is a for-profit Decentralised Autonomous Organisation (DAO) supporting the development of the Ethereum ecosystem.</p>
          </div>
          <div className="investment">
            <picture>
              <img src="/img/investments/consensys.svg"/>
            </picture>
            <span><b>Consensys</b></span>
            <p>20XX partnership.</p>
            <p>Consensys is a market-leading Ethereum-focused software company.</p>
          </div>
          <div className="investment">
            <picture>
              <img src="/img/investments/flamingo.svg"/>
            </picture>
            <span><b>Flamingo</b></span>
            <p>20XX partnership.</p>
            <p>Flamingo is a DAO, incubated by the LAO community supporting the expanding NFT metaverse.</p>
          </div>
        </div>
        <Footer />
      </section>
      <Scripts/>
    </>
  )
}

export default Investments;