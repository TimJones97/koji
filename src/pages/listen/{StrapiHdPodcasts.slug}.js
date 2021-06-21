/* eslint-disable */
import React, { Component, useState } from "react";
import { createPortal } from 'react-dom';
import { graphql, Link } from 'gatsby';
import Moment from "react-moment";

import Article from '../../components/article';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import Footer from '../../components/footer';
import Episode from '../../components/episode';

// Image assets
import hd_thumbnail from '../../../static/img/listen/thumbnail.svg';
import player_img from '../../../static/img/article/player.png';
import player_img_small from '../../../static/img/article/player_mobile.png';
import video_placeholder from '../../../static/img/article/video_placeholder.png';

export const queryPodcast = graphql`
  query StrapiHdPodcasts($slug: String!) {
    strapiHdPodcasts(slug: { eq: $slug }) {
      captivate_link
      description
      duration
      episode
      guest
      img {
        formats {
          medium {
            url
          }
        }
      }
      meeting_notes {
        description
        note
        notes
        title
      }
      slug
      transcript
      youtube_link
    }
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
class ListenArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: this.props.data.strapiHdPodcasts,
      metaTitle: this.props.data.strapiHdPodcasts.guest,
      metaDescription: this.props.data.strapiHdPodcasts.description,
      recentEpisodes: [],
      currentURL: ''
    };
    this.renderRecentEpisodes = this.renderRecentEpisodes.bind(this);
  }

  renderRecentEpisodes(){
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
            return (
              <Episode 
                size='small' 
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
          });
    const pageURL = window.location.href;
    this.setState({recentEpisodes: sortedEpisodes});
    this.setState({currentURL: pageURL});
  }
  componentDidMount() {
    this.renderRecentEpisodes();
  }
  render() {
    return (
      <>
        <Layout>
          <SEO title={this.state.metaTitle} description={this.state.metaDescription}/>
          <section className="normal-section article listen-article light-nav brown-nav">
            <div className="container">
              <div>
                <div className="left-contain">
                  <hr className="desktop"/>
                  <header>
                    <span className="number">Episode #{this.state.article.episode}</span>
                    <h1 className="title">
                      {this.state.article.guest}
                    </h1>
                    <div className="flexbox">
                      <div className="info">
                        <p className="date">
                          <Moment format="Do MMMM, YYYY">{this.state.article.date}</Moment>
                        </p>
                        <span>&nbsp;|&nbsp;</span>
                        <p className="time">{this.state.article.duration} minutes</p>
                      </div>
                      <div className="share-links">
                        <p><b>Share</b></p>
                        <a href={"https://angel.co/alpha/webext/new?url=" + this.state.currentURL} target="_blank">AngelList</a>
                        <a href={"https://www.linkedin.com/shareArticle?mini=true&url=" + this.state.currentURL} target="_blank">LinkedIn</a>
                        <a href={"https://t.me/share/url?url=" + this.state.currentURL} target="_blank">Telegram</a>
                        <a href={"https://twitter.com/intent/tweet?url=" + this.state.currentURL} target="_blank">Twitter</a>
                        <a href={this.state.article.youtube_link} target="_blank">Youtube</a>
                      </div>
                    </div>
                  </header>
                  <div className="episode-play">
                    <iframe src={this.state.article.captivate_link} title="Captivate Player" width="100%" height="170px" frameBorder="0"/>
                  </div>
                  <div className="text-contain">
                    <h2 className="tagline">{this.state.article.description}</h2>
                    <p>
                      {this.state.article.transcript}
                    </p>
                    {this.state.article.notes && 
                      <p>
                        {this.state.article.notes}
                      </p>
                    }
                    
                  </div>
                  {(this.state.article.youtube_link != null) &&
                    <div className="article-video">
                      <iframe src={this.state.article.youtube_link} title="YouTube Video" width="100%" height="620px" frameBorder="0"/>
                    </div>
                  }
                </div>
                <div className="right-contain">
                  <picture className="article-img">
                    <img src={this.state.article.img.formats.medium.url}/>
                  </picture>
                  <div className="episode-play mobile">
                    <iframe src={this.state.article.captivate_link} title="Captivate Player" width="100%" height="175px" frameBorder="0"/>
                  </div>
                </div>
              </div>
              <div className="recent-episodes">
                <span className="subheading">RECENT EPISODES</span>
                {/*Get the most recent 2 episodes*/}
                {this.state.recentEpisodes.slice(0, 2).map((episode, index) => {
                  return episode
                })}
                <Link className="link-white" to="/listen">View all Episodes<button role="button" className="circle-btn sml"/></Link>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default ListenArticle;