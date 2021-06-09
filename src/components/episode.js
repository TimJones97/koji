/* eslint-disable */
import React, { Component } from "react";
import hd_thumbnail from '../../static/img/listen/thumbnail.svg';
import read_thumbnail from '../../static/img/read/thumbnail.png';

class Episode extends Component {
  render() {
    return (
      <>
        {(this.props.small) &&
          <article className={"episode " + (this.props.read ? 'read' : '')}>
            <div className="episode-info">
              <div className="details">
                <span className="number">Article #01</span>
                <p className="heading">Article Heading</p>
                <p className="date">December 15, 2020</p>
                <span>&nbsp;|&nbsp;</span>
                <p className="time">45 mins</p>
                {/* Remove /Koji links when going into production*/}
                {!(this.props.read) &&
                  <a href="/episode-page" className="open mobile">Listen Now</a>
                }
              </div>
            </div>
            {(this.props.read) 
              ? <>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <a href="/read-page" className="open">Read Now</a>
                </>
              : <>
                  <figure className="episode-thumbnail">
                    <div className="blur" />
                    <img className="thumbnail" src={hd_thumbnail} />
                  </figure>
                  <a href="/episode-page" className="open">Listen Now</a>
                </>
            }
          </article>
        }
        {(this.props.large) &&
          <article className={"episode lg " + (this.props.read ? 'read' : '')}>
            <figure className="episode-thumbnail collapse-sm">
              <div className="blur" />
              {(this.props.read) 
                ? <img className="thumbnail" src={read_thumbnail} />
                : <img className="thumbnail" src={hd_thumbnail} />
              }
            </figure>
            <div className="episode-info">
              <div className="details">
                <span className="number">Article #01</span>
                <p className="heading">Article Heading</p>
                <p className="date">December 15, 2020</p>
                <span>&nbsp;|&nbsp;</span>
                <p className="time">45 mins</p>
              </div>
              {!(this.props.read) &&
                <figure className="episode-thumbnail collapse-md">
                  <div className="blur" />
                  <img className="thumbnail" src={hd_thumbnail} />
                </figure>
              }
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet
                </p>
              </div>
              {(this.props.read) 
                ? <a href="/read-page" className="open">Read Now</a>
                : <a href="/episode-page" className="open">Listen Now</a>
              }
            </div>
          </article>
        }
      </>
    );
  }
}

export default Episode;