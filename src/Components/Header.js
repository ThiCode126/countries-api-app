import React from 'react';

import MoonLight from '../assets/moon-light.svg';
import MoonDark from '../assets/moon-dark.svg';

import { useHistory } from "react-router-dom";

const Header = ({ darkTheme, setDarkTheme }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/`)
  }

  return (

    <header className="header">
      <div className="cw in-header">
        <h1 className="title" onClick={handleClick}>
          Where is the World ?
        </h1>
        <div
          className="theme-toggle"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {
            darkTheme === true ? (
              <img src={MoonDark} alt="moon-dark" />
            ) : (
              <img src={MoonLight} alt="moon-light" />
            )
          }
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  )
}

export default Header