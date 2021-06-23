import React, { Component } from "react";
import { Link } from "gatsby"
import read_thumbnail from '../../static/img/read/thumbnail.png';

class Episode extends Component {
  render() {
    return (
      <>
        <Link className="episode-link" to="/read-page">
          {(this.props.small) &&
              <article className="episode read">
                <div className="episode-info">
                  <div className="details">
                    <span className="number">Article #01</span>
                    <p className="heading">Article Heading</p>
                    <p className="date">December 15, 2020</p>
                    <span>&nbsp;|&nbsp;</span>
                    <p className="time">45 mins</p>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet
                  </p>
                </div>
                <span className="open">Read Now</span>
              </article>
          }
          {(this.props.large) &&
            <article className="episode lg read">
              <figure className="episode-thumbnail collapse-sm">
                <div className="blur" />
                <img alt="read-thumbnail" className="thumbnail" src={read_thumbnail} />
              </figure>
              <div className="episode-info">
                <div className="details">
                  <span className="number">Article #01</span>
                  <p className="heading">Article Heading</p>
                  <p className="date">December 15, 2020</p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="time">45 mins</p>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet
                  </p>
                </div>
                <span className="open">Read Now</span>
              </div>
            </article>
          }
        </Link>
      </>
    );
  }
}

export default Episode;