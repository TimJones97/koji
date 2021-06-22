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

// Scroll to top of page upon navigation
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms
  const TRANSITION_DELAY = 0.3 * 1000 * 2

  // if it's a "normal" route
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }

  return false
}