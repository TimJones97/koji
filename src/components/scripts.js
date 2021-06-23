import React, { Component } from "react";

class Scripts extends Component {
  componentDidMount() {
    const scripts = ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', 
                     'https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.js',
                     'https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js'];

    // Grab the local path for jQuery functions
    scripts.push('../js/script.js');

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
        {/* Scripts are inserted here */}
      </div>
    );
  }
}

export default Scripts;