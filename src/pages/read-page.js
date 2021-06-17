/* eslint-disable */
import React, { Component } from "react";
import Article from '../components/article'
import SEO from '../components/seo';
import Layout from '../components/layout';
import ReadEpisode from '../components/read-episode'

// Image assets
import read_thumbnail from '../../static/img/read/thumbnail.png';

import Footer from '../components/footer'

class ReadPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Read"/>
          <section className="normal-section article read-article light-nav brown-nav">
            <div className="container">
              <div>
                <div className="left-contain">
                  <hr className="desktop"/>
                  <header>
                    <span className="number">Article #1</span>
                    <h1 className="title">
                      Article Heading
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
                  <picture className="article-img mobile-sml">
                    <img src={read_thumbnail}/>
                  </picture>
                  <div className="text-contain">
                    <h2 className="tagline">Donec et lorem non sem efficitur suscipit ac id ligula. Fusce consectetur lorem eu turpis tristique, ut faucibus mauris laoreet. Proin et congue risus.Proin eu mi gravida, placerat dui et tortor.</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam mi, scelerisque eu mi at, suscipit fermentum mi. In hac habitasse platea dictumst. Maecenas a venenatis nibh, non posuere tellus. Ut quis pharetra nunc, a varius nulla. Ut at tincidunt lacus, ultrices interdum lectus. Nullam hendrerit nunc sit amet placerat ultrices. Nam ultrices ipsum non ipsum interdum, vel sagittis sapien feugiat. Nullam velit orci, interdum in felis eget, ullamcorper iaculis nunc.
                    </p>
                    <picture className="article-img mobile">
                      <img src={read_thumbnail}/>
                    </picture>
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
                </div>
                <div className="right-contain desktop">
                  <picture className="article-img">
                    <img src={read_thumbnail}/>
                  </picture>
                </div>
              </div>
              <div className="recent-episodes">
                <hr/>
                <span className="subheading">READ</span>
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

export default ReadPage;