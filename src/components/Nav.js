import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  //Guardo los datos en un array , porque le pongo const y no let???
  const seccionesNavbar = [
    {
      nombre: "Grupos",
      path: "/grupos",
    },
    {
      nombre: "Fase de Grupos",
      path: "/fase-de-grupos",
    },
    {
      nombre: "Octavos",
      path: "/octavos",
    },
    {
      nombre: "Cuartos",
      path: "/cuartos",
    },
    {
      nombre: "Semi Final",
      path: "/semifinal",
    },
    {
      nombre: "Final",
      path: "/final",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Fixture
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            {seccionesNavbar.map((seccion, index) => {
              return (
                <li key={index} className="nav-item">
                  <NavLink
                    to={seccion.path}
                    className="nav-link"
                    active="active"
                  >
                    {seccion.nombre}
                  </NavLink>
                </li>
              );
            })}
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
};

export default Nav;
