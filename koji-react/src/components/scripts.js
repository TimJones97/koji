import React, { Component } from "react";
import ReactDOM from "react-dom";

class Scripts extends Component {
  componentDidMount() {
    const scripts = ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', 
                     'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js', 
                     'https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.js', 
                     'js/script.js'];
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