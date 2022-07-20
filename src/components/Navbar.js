import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode.clr==='light'?'light':'dark'} bg-${props.mode.clr==='light'?'light':'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href={'/'}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <abbr className="nav-link active" aria-current="page" href="/">Home</abbr>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to={'/about'}>{props.aboutText}</Link> */}
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>
      </ul>
      <button className={`btn btn-${props.mode.clr==='light'?'dark':'light'} my-2 mx-1`} onClick={props.switchToDark}>{props.mode.clr==='light'?'Dark':'Light'}</button>
      <button className="btn btn-primary my-2 mx-1" onClick={props.switchToBlue} >Blue</button>
      <button className="btn btn-success my-2 mx-1" onClick={props.switchToGreen} >Green</button>

      {/* <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'? 'Dark' : 'Light'} Mode</label>
      </div> */}
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  );
}

Navbar.propTypes={
        title: PropTypes.string.isRequired,
        aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "TextUtils",
    aboutText: "About"
}
