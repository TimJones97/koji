/* eslint-disable */
import React, { Component } from "react"
import { Link } from "gatsby"
import Article from '../components/article'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Episode from '../components/episode'

// Image assets
import hd_thumbnail from '../../static/img/listen/thumbnail.svg'
import player_img from '../../static/img/article/player.png'
import player_img_small from '../../static/img/article/player_mobile.png'
import video_placeholder from '../../static/img/article/video_placeholder.png'

class EpisodePage extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Listen"/>
          <section className="normal-section article listen-article light-nav brown-nav">
            <div className="container">
              <div>
                <div className="left-contain">
                  <hr className="desktop"/>
                  <header>
                    <span className="number">Episode #1</span>
                    <h1 className="title">
                      TM Lee
                    </h1>
                    <div className="flexbox">
                      <div className="info">
                        <p className="date">December 15, 2020</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p className="time">45 mins</p>
                      </div>
                      <div className="share-links">
                        <p><b>Share</b></p>
                        <a href="#">AngelList</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Telegram</a>
                        <a href="#">Twitter</a>
                        <a href="#">Youtube</a>
                      </div>
                    </div>
                  </header>
                  <div className="episode-play">
                    <img src={player_img}/>
                  </div>
                  <div className="text-contain">
                    <h2 className="tagline">Donec et lorem non sem efficitur suscipit ac id ligula. Fusce consectetur lorem eu turpis tristique, ut faucibus mauris laoreet. Proin et congue risus.Proin eu mi gravida, placerat dui et tortor.</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam mi, scelerisque eu mi at, suscipit fermentum mi. In hac habitasse platea dictumst. Maecenas a venenatis nibh, non posuere tellus. Ut quis pharetra nunc, a varius nulla. Ut at tincidunt lacus, ultrices interdum lectus. Nullam hendrerit nunc sit amet placerat ultrices. Nam ultrices ipsum non ipsum interdum, vel sagittis sapien feugiat. Nullam velit orci, interdum in felis eget, ullamcorper iaculis nunc.
                    </p>
                    <p>
                      Nullam maximus augue tincidunt enim lacinia placerat. Aenean id auctor lectus, ac sagittis ante. Morbi magna mauris, interdum dignissim vestibulum eu, blandit et turpis. Aliquam aliquet egestas pulvinar. Nunc accumsan rhoncus varius. Vestibulum quis egestas nibh. Quisque hendrerit dui vel erat ultrices iaculis. Sed rutrum finibus urna, nec molestie orci luctus vel. Mauris sed erat id ipsum dapibus tempus. Maecenas sed lacinia ligula. Ut tempus augue et neque imperdiet, eget pellentesque nulla posuere. Integer vel felis elementum, vulputate velit vitae, tincidunt sem. In nibh odio, consectetur ac ligula ut, faucibus tincidunt urna.
                    </p>
                    <p>
                      Morbi pharetra facilisis ex at tincidunt. Duis feugiat enim nec commodo dignissim. Donec vestibulum est ac ipsum mattis viverra. Donec id bibendum erat, vitae luctus velit. Maecenas efficitur cursus mi eu pharetra. Donec in nulla pulvinar, consectetur urna quis, placerat eros. Pellentesque ut cursus ex, sit amet aliquet metus. Vestibulum tempus dapibus augue, lobortis consequat orci venenatis sit amet. Vivamus ligula nisi, laoreet nec risus ut, ultricies faucibus augue. Donec laoreet rhoncus ipsum nec eleifend. Etiam rutrum, eros eget ornare aliquet, libero est volutpat est, rutrum tincidunt risus lorem sed quam. Aenean vitae tristique nulla, in scelerisque augue.
                    </p>
                    <p>
                      Twitter: <a href="https://twitter.com/alexvandesande">@alexvandesande</a>
                      Website: <a href="google.com">google.com</a>

                      —

                      Show Notes:
                      Google
                      Blockchain
                      Internet
                      Wikipedia
                      Great spots to eat in Brisbane blog post
                    </p>
                  </div>
                  <div className="article-video">
                    <img src={video_placeholder}/>
                  </div>
                </div>
                <div className="right-contain">
                  <picture className="article-img">
                    <img src={hd_thumbnail}/>
                  </picture>
                  <div className="episode-play mobile">
                    <img src={player_img_small}/>
                  </div>
                </div>
              </div>
              <div className="recent-episodes">
                <span className="subheading">RECENT EPISODES</span>
                <Episode small/>
                <Episode small/>
                <Link className="link-white" to="/listen">View all Episodes<button role="button" className="circle-btn sml"/></Link>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default EpisodePage;