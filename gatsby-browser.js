const React = require("react")
const { AnimatePresence } = require("framer-motion")

exports.wrapPageElement = ({ element }) => {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer];
  if (window.locations[window.locations.length - 1] !== window.location.pathname) {
    window.locations.push(window.location.pathname);
  }
  window.previousPath = window.locations[window.locations.length - 2];
}