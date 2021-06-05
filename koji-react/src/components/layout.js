import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import NavBar from './navbar';
import Footer from './footer';

const Layout = ({ children, seo }) => {
  return (
    <>
      <Header seo={seo} />
      <main>
        <NavBar />
         {children}
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;