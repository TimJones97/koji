/* eslint-disable */
import React, { Component } from "react";
import hd_thumbnail from '../../static/img/listen/thumbnail.svg';
import read_thumbnail from '../../static/img/read/thumbnail.svg';

class Episode extends Component {
  render() {
    return (
      <>
        {(this.props.size === 'small') &&
          <article className={"episode " + (this.props.read && 'read')}>
            <div className="episode-info">
              <div className="details">
                <span className="number">Article #01</span>
                <p className="heading">Article Heading</p>
                <p className="date">December 15, 2020</p>
                <span>&nbsp;|&nbsp;</span>
                <p className="time">45 mins</p>
              </div>
            </div>
            {(this.props.read) 
              ? <>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d
                    </p>
                  </div>
                  <span className="listen">Read Now</span>
                </>
              : <>
                  <figure className="episode-thumbnail">
                    <div className="blur" />
                      <img className="thumbnail" src={read_thumbnail} />
                  </figure>
                  <span className="listen">Listen Now</span>
                </>
            }
          </article>
        }
        {(this.props.size === 'large') &&
          <article className="episode large">
            <figure className="episode-thumbnail">
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
        }
      </>
    );
  }
}

export default Episode;