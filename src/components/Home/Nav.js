import React from "react";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Fixture
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Grupos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fase de Grupos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Octavos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cuartos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Semifinal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Final
                </a>
              </li>
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nombre Apellido
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    );
}

export default Nav;