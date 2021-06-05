import React from "react";
import PropTypes from "prop-types";
import Seo from "./seo";
import NavBar from './navbar';
import Footer from './footer';

const Layout = ({ children, seo }) => {
  return (
    <>
      <Seo seo={seo} />
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