import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Navbar from "./navbar"
import Footer from "./footer"
import Scripts from "./scripts"

// Global CSS styles
import "/static/css/style.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar type="light"/>
      <motion.main
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2
        }}
      >
        {children}
      </motion.main>
      <Footer/>
      <Scripts/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
