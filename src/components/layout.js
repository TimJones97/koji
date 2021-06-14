import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Navbar from "./navbar"
import Scripts from "./scripts"

// Global CSS styles
import "/static/css/style.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar style="light"/>
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
          duration: 1,
          delay: 0.3
        }}
      >
        {children}
      </motion.main>
      <Scripts/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
