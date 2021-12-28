import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  let result = `${props.country}`.toUpperCase();
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link onClick={()=>{props.setCountry('in')}} className="navbar-brand" to="/in">
          Monkey News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {result}
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link onClick={()=>{props.setCountry('in')}}  className="dropdown-item" to="/in">
                    India
                  </Link>
                </li>
                <li>
                  <Link onClick={()=>{props.setCountry('us')}} className="dropdown-item" to="/us">
                    USA
                  </Link>
                </li>
                <li>
                  <Link onClick={()=>{props.setCountry('nz')}} className="dropdown-item" to="/nz">
                  New Zealand
                  </Link>
                <li>
                  <Link onClick={()=>{props.setCountry('ru')}} className="dropdown-item" to="/ru">
                    Russia
                  </Link>
                </li>
                </li>
              </ul>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to={`${props.country}/business`}>
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${props.country}/entertainment`}>
                Entertainment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={`${props.country}/health`}>
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${props.country}/science`}>
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${props.country}/sports`}>
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`${props.country}/technology`}>
                Technology
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
          <form className="d-flex mx-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

// Navbar.default={
//   country:'in'
// }
export default Navbar;
