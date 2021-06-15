/* eslint-disable */
import React, { Component } from "react";
import { Link } from "gatsby"
import hd_thumbnail from '../../static/img/listen/thumbnail.svg';

class Episode extends Component {
  render() {
    return (
      <>
        <Link className="episode-link" to="/episode-page">
          {(this.props.small) &&
            <article className="episode">
              <div className="episode-info">
                <div className="details">
                  <span className="number">Article #01</span>
                  <p className="heading">Article Heading</p>
                  <p className="date">December 15, 2020</p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="time">45 mins</p>
                  <span className="open mobile">Listen Now</span>
                </div>
              </div>
              <figure className="episode-thumbnail">
                <div className="blur" />
                <img className="thumbnail" src={hd_thumbnail} />
              </figure>
              <span className="open">Listen Now</span>
            </article>
          }
          {(this.props.large) &&
            <article className="episode lg">
              <figure className="episode-thumbnail collapse-sm">
                <div className="blur" />
                <img className="thumbnail" src={hd_thumbnail} />
              </figure>
              <div className="episode-info">
                <div className="details">
                  <span className="number">Article #01</span>
                  <p className="heading">Article Heading</p>
                  <p className="date">December 15, 2020</p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="time">45 mins</p>
                </div>
                <figure className="episode-thumbnail collapse-md">
                  <div className="blur" />
                  <img className="thumbnail" src={hd_thumbnail} />
                </figure>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet
                  </p>
                </div>
                <span className="open">Listen Now</span>
              </div>
            </article>
          }
        </Link>
      </>
    );
  }
}

export default Episode;