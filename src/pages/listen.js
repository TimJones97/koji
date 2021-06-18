/* eslint-disable */
import React, { Component } from "react";
import Episode from '../components/episode'
import SEO from '../components/seo';
import Layout from '../components/layout';
import Footer from '../components/footer'

// Images
import hd_logo from '../../static/img/listen/high-definition-logo.svg';

export const query = graphql`
  query AllPodcasts {
    allStrapiHdPodcasts {
      edges {
        node {
          captivate_link
          description
          episode
          duration
          guest
          img {
            formats {
              medium {
                url
              }
            }
          }
          recorded_on(formatString: "")
          slug
          release_date(formatString: "")
          youtube_link
          transcript
        }
      }
    }
  }
`;

class Listen extends Component {
  constructor (props) {
    super();
    console.log(props.data, "This is all the podcasts")
  }
  render() {
    return (
      <>
        <Layout>
          <SEO title="Listen"/>
          <section className="normal-section listen light-nav brown-nav">
            <div className="container">
              <header>
                <img className="highdef-logo" src={hd_logo} />
                <p>
                  Behind every success is a person. Behind every person is a story.
                  High Definition illuminates the motives within these stories, that drive people to achieve great things. Pretences are left at the door. Truth rises to the surface with refreshing transparency. Unglamorous. Unvarnished. Unscrutinised. Captured in, High Definition.
                </p>
              </header>
              <hr className="mobile"/>
              <div className="episode-lg">
                <span className="subheading">MOST RECENT EPISODE</span>
                <Episode large/>
              </div>
              <hr/>
              <span className="subheading">ALL EPISODES</span>
              <div className="episode-row">
                <Episode small/>
                <Episode small/>
                <Episode small/>
                <Episode large/>
              </div>
              <div className="episode-row">
                <Episode large/>
                <Episode small/>
                <Episode small/>
                <Episode small/>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default Listen;