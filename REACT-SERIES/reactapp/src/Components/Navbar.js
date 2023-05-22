// import React from 'react'
// import { Link } from 'react-router-dom';



// const Navbar = () => {
//   return (
//     <>
//       <ul>
//         <Link to="/">
//           <li>Home</li>
//         </Link>
//         <Link to="/about">
//           <li>About</li>
//         </Link>
//         <Link to="/contact">
//           <li>Contact</li>
//         </Link>
//         <Link to="/services">
//           <li>Services</li>
//         </Link>
//       </ul>
//     </>
//   );
// }

// export default Navbar


//--------------responsive website------------


import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <NavLink to="/">
            <img src="../images/image1.jpg" className="logo" />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">Home</li>
              </NavLink>
              <NavLink to="/about" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">About</li>
              </NavLink>
              <NavLink to="/contact" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">Contact</li>
              </NavLink>
              <NavLink to="/services" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">Services</li>
              </NavLink>
              <NavLink to="/signin" activeClassName="active_styles" exact>
                <li class="btn btn-dark">Sign in</li>
              </NavLink>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar