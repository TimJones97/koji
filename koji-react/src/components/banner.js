import React from 'react';

const Banner = ({ title, subTitle }) => (
    <div className="banner">
        <img rel="preload" className="background" src="/background.png" alt='Tracer Banner'/>
        <div className="text">
            <h1>
                {title}
            </h1>
            <h2>
                {subTitle}
            </h2>
        </div>
    </div>
)

export default Banner