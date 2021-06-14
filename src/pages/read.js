/* eslint-disable */
import React from 'react';
import Episode from '../components/episode'
import SEO from '../components/seo';
import Layout from '../components/layout';
import Footer from '../components/footer'

const Read = () => {
  return (
    <>
      <Layout>
        <SEO title="Read"/>
        <section className="normal-section read light-nav brown-nav">
          <div className="container">
            <header>
              <span className="subheading">READ</span>
              <h1>
                Curated writing and research from the Koji team and other collaborators.
              </h1>
            </header>
            <hr className="mobile"/>
            <div className="right-contain">
              <span className="subheading">MOST RECENT ARTICLE</span>
              <Episode large read/>
            </div>
            <hr/>
            <span className="subheading">COMPLETE LISTING</span>
            <div className="episode-row">
              <Episode small read/>
              <Episode small read/>
              <Episode large read/>
              <Episode small read/>
            </div>
            <div className="episode-row">
              <Episode large read/>
              <Episode small read/>
              <Episode small read/>
              <Episode small read/>
            </div>
          </div>
        </section>
        <Footer/>
      </Layout>
    </>
  )
}

export default Read;