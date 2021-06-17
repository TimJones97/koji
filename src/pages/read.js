/* eslint-disable */
import React, { Component } from "react";
import ReadEpisode from '../components/read-episode'
import SEO from '../components/seo';
import Layout from '../components/layout';
import Footer from '../components/footer'

class Read extends Component {
  render() {
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
                <ReadEpisode large/>
              </div>
              <hr/>
              <span className="subheading">COMPLETE LISTING</span>
              <div className="episode-row">
                <ReadEpisode small/>
                <ReadEpisode small/>
                <ReadEpisode large/>
                <ReadEpisode small/>
              </div>
              <div className="episode-row">
                <ReadEpisode large/>
                <ReadEpisode small/>
                <ReadEpisode small/>
                <ReadEpisode small/>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default Read;