/* eslint-disable */
import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Scripts from '../components/scripts'
import hd_logo from '../../static/img/listen/high-definition-logo.svg';
import hd_thumbnail from '../../static/img/listen/thumbnail01.svg';

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
            <article className="episode">
              <figure className="episode-thumbnail">
                <div className="blur" />
                <img className="thumbnail" src={hd_thumbnail} />
              </figure>
              <div className="episode-info">
                <div className="details">
                  <span className="number">Article #01</span>
                  <p className="heading">Article Heading</p>
                  <p className="date">December 15, 2020</p>
                  <p className="time">45 mins</p>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d
                  </p>
                </div>
                <span className="listen">Listen Now</span>
              </div>
            </article>
          </div>
          {/*<div className="container__episodes">
            <span className="subheading">RECENT EPISODES</span>
            <article className="episode">
              <figure className="episode-thumbnail">
                <div className="blur" />
                <img className="thumbnail" src={hd_thumbnail} />
              </figure>
              <span className="listen">Listen Now</span>
            </article>
            
          </div>*/}
        </div>
      </section>
      <Footer />
      <Scripts/>
    </>
  )
}

export default Listen;