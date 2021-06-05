/* eslint-disable */
import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Episode from '../components/episode'
import Footer from '../components/footer'
import Scripts from '../components/scripts'
import hd_logo from '../../static/img/listen/high-definition-logo.svg';

const Listen = () => {
  return (
    <>
      <Header overflow="true"/>
      <Navbar background="light brown-bg"/>
      <section className="listen">
        <div className="container">
          <header>
            <img className="highdef-logo" src={hd_logo} />
            <p>
              Behind every success is a person. Behind every person is a story.
              High Definition illuminates the motives within these stories, that drive people to achieve great things. Pretences are left at the door. Truth rises to the surface with refreshing transparency. Unglamorous. Unvarnished. Unscrutinised. Captured in, High Definition.
            </p>
          </header>
          <div className="episode-lg">
            <span className="subheading">MOST RECENT EPISODE</span>
            <Episode size="large"/>
          </div>
          <hr/>
          <span className="subheading">ALL EPISODES</span>
          <div class="episodes-sml">
            <Episode size="small"/>
            <Episode size="small"/>
            <Episode size="small"/>
          </div>
          <Episode size="large"/>
          <div className="episode-lg">
            <Episode size="large"/>
          </div>
          <div class="episodes-sml right">
            <Episode size="small"/>
            <Episode size="small"/>
            <Episode size="small"/>
          </div>
        </div>
      </section>
      <Footer />
      <Scripts/>
    </>
  )
}

export default Listen;