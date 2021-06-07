/* eslint-disable */
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Scripts extends Component {
  componentDidMount() {
    const scripts = ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', 
                     'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js', 
                     'https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.js',
                     'https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js',
                     'https://cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/4.1.0/dotdotdot.js'];

    // Change script location depending on current page  
    // as site is published to a subfolder (https://timj.design/koji)
    // Actual site will be published to a root folder.
    // (only for development - can be removed after)
    if(this.props.nestedLink){
      scripts.push('../js/script.js');
    }
    else {
      scripts.push('./js/script.js');
    }

    const div = this.div;
    scripts.forEach(function(value, index, array){
      const script = document.createElement("script");
      script.async = false;
      script.referrerPolicy = 'no-referrer';
      script.crossOrigin = 'anonymous';
      script.src = value;
      div.appendChild(script);
    });
  }
  render() {
    return (
      <div className="scripts" ref={el => (this.div = el)}>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default Scripts;