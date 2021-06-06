/* eslint-disable */
import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Episode from '../components/episode'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const Read = () => {
  return (
    <>
      <Header overflow/>
      <Navbar background="light brown-bg"/>
      <section className="read">
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
            <Episode size="large" read/>
            <Episode size="small" mobile read/>
          </div>
          <hr/>
          <span className="subheading">COMPLETE LISTING</span>
          <div className="episode-row">
            <Episode size="small" read/>
            <Episode size="small" read/>
            <Episode size="small" read/>
            <Episode size="large" read/>
            <Episode size="small" mobile read/>
          </div>
          <div className="episode-row">
            <Episode size="small" read/>
            <Episode size="small" read/>
            <Episode size="small" read/>
            <Episode size="small" mobile read/>
            <Episode size="large" read/>
          </div>
        </div>
      </section>
      <Footer/>
      <Scripts nestedLink/>
    </>
  )
}

export default Read;