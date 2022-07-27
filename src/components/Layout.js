import React from "react";
import Container from "./Container";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
