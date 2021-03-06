import React from 'react';

const Header = (props) => (
    <header className="top">
        <h1>
          Catchs
          <span className="ofThe">
            <span className="Of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 classname="tagline">
          <span>{props.tagline}</span>
        </h3>
      </header>
  )

export default Header;