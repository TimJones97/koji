/* eslint-disable */
import React, { Component } from "react";

class CircleNav extends Component {
  render() {
    return (
      <div className={"circle-nav " + (this.props.location)}>
        <div className="circles">
          <a className="one nav-link">
            <span />
          </a>
          <a className="two nav-link">
            <span />
          </a>
          {(this.props.location === 'home') &&
            <>
              <a className="three nav-link">
                <span />
              </a>
              <a className="four active nav-link" data-menuanchor="page1" href="#page1">
                <span />
              </a>
              <a className="five nav-link" data-menuanchor="page2" href="#page2">
                <span />
              </a>
              <a className="six nav-link" data-menuanchor="page3" href="#page3">
                <span />
              </a>
              <a className="seven nav-link" data-menuanchor="page4" href="#page4">
                <span />
              </a>
            </>
          }

          {(this.props.location === 'thesis') &&
            <>
              <a className="three active nav-link" data-menuanchor="thesis-page1" href="#thesis-page1">
                <span />
              </a>
              <a className="four nav-link" data-menuanchor="thesis-page2" href="#thesis-page2">
                <span />
              </a>
              <a className="five nav-link" data-menuanchor="thesis-page3" href="#thesis-page3">
                <span />
              </a>
              <a className="six nav-link" data-menuanchor="thesis-page4" href="#thesis-page4">
                <span />
              </a>
              <a className="seven nav-link" data-menuanchor="thesis-page5" href="#thesis-page5">
                <span />
              </a>
            </>
          }

          <a className="eight nav-link">
            <span />
          </a>
          <a className="nine nav-link">
            <span />
          </a>
          <a className="ten nav-link">
            <span />
          </a>
          <a className="eleven nav-link">
            <span />
          </a>
          <a className="twelve nav-link">
            <span />
          </a>
        </div>
      </div>
    );
  }
}

export default CircleNav;