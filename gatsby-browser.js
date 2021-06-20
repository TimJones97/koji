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

  // if we used the browser's forwards or back button
  else {
    // breaking change in shouldUpdateScroll browser API hook:
    // https://github.com/gatsbyjs/gatsby/issues/23842
    // looks like they fixed it in Gatsby v. 2.28.1
    // https://github.com/gatsbyjs/gatsby/pull/27384

    const savedPosition = getSavedScrollPosition(location) || [0, 0]

    window.setTimeout(() => window.scrollTo([0, 0]), TRANSITION_DELAY)
  }

  return false
}