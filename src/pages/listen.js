/* eslint-disable */
import React, { Component } from "react";
import { graphql } from 'gatsby';
import Episode from '../components/episode';
import SEO from '../components/seo';
import Layout from '../components/layout';

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
    super(props);
    this.state = {
      episodes: [],
      mostRecent: null
    };
    this.generateEpisodes = this.generateEpisodes.bind(this);
  }
  generateEpisodes() {
    const episode_data = this.props.data.allStrapiHdPodcasts.edges,
          sortedEpisodes = [].concat(episode_data)
          .sort((a, b) => a.node.episode > b.node.episode ? -1 : 1)
          .map((single_episode, index) => {
              const episode = single_episode.node.episode,
                    title = single_episode.node.guest,
                    thumbnail = single_episode.node.img.formats.medium.url,
                    date = single_episode.node.release_date,
                    description = single_episode.node.description,
                    duration = single_episode.node.duration,
                    slug = single_episode.node.slug;
              var size = 'small';
              // Make some of the episodes large as per design
              if (index == 3 || index == 4){
                size = 'large';
              }      
              // If the episode is the first in the array, it is the most recent one
              if(index == 0){
                this.setState({mostRecent:
                  <Episode 
                    size='large'
                    episode={episode}
                    title={title}
                    thumbnail={thumbnail}
                    date={date}
                    description={description}
                    duration={duration}
                    slug={slug}
                    key={index}
                  />
                })
              }
              return (
                <Episode 
                  size={size} 
                  episode={episode}
                  title={title}
                  thumbnail={thumbnail}
                  date={date}
                  description={description}
                  duration={duration}
                  slug={slug}
                  key={index}
                />
              )      
            }
          );
    // Assign the new array to the state array
    this.setState({episodes: sortedEpisodes});

    // Get the two most recent episodes to pass it to the template page
    const recentEpisodes = [];
    recentEpisodes.push(sortedEpisodes[sortedEpisodes.length - 1]);
    recentEpisodes.push(sortedEpisodes[sortedEpisodes.length - 2]);

    window.recentEpisodeList = recentEpisodes;
  }
  componentDidMount() {
    this.generateEpisodes();
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
                {this.state.mostRecent}
              </div>
              <hr/>
              <span className="subheading">ALL EPISODES</span>
              <div className="episode-row">
                {/*Get the first four episodes*/}
                {this.state.episodes.slice(0, 4).map((episode, index) => {
                  return episode
                })}
              </div>
              <div className="episode-row">
                {/*Get the following four episodes*/}
                {this.state.episodes.slice(4, 8).map((episode, index) => {
                  return episode
                })}
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default Listen;