import React, { Component } from "react";
import { Link } from "gatsby";
import Moment from "react-moment";

class Episode extends Component {
  constructor (props) {
    super();
  }
  render() {
    return (
      <>
        <Link className="episode-link" to={"/listen/" + this.props.slug} state={this.props.episodeData}>
          {(this.props.size === 'small') &&
            <article className="episode">
              <div className="episode-info">
                <div className="details">
                  <span className="number">Article #{this.props.episode}</span>
                  <p className="heading">{this.props.title}</p>
                  <p className="date">
                    <Moment format="Do MMMM, YYYY">{this.props.date}</Moment>
                  </p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="time">{this.props.duration} minutes</p>
                  <span className="open mobile">Listen Now</span>
                </div>
              </div>
              <figure className="episode-thumbnail">
                <div className="blur" />
                <img alt="episode-thumbnail" className="thumbnail" src={this.props.thumbnail} />
              </figure>
              <span className="open">Listen Now</span>
            </article>
          }
          {(this.props.size === 'large') &&
            <article className="episode lg">
              <figure className="episode-thumbnail collapse-sm">
                <div className="blur" />
                <img alt="episode-thumbnail" className="thumbnail" src={this.props.thumbnail} />
              </figure>
              <div className="episode-info">
                <div className="details">
                  <span className="number">Article #{this.props.episode}</span>
                  <p className="heading">{this.props.title}</p>
                  <p className="date">
                    <Moment format="Do MMMM, YYYY">{this.props.date}</Moment>
                  </p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="time">{this.props.duration} minutes</p>
                </div>
                <figure className="episode-thumbnail collapse-md">
                  <div className="blur" />
                  <img alt="episode-thumbnail" className="thumbnail" src={this.props.thumbnail} />
                </figure>
                <div className="description">
                  <p>
                    {this.props.description}
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