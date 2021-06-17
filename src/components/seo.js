/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// Images
import favicon from "/static/img/general/favicon.png";
import logo_OG from "/static/img/general/og-image.jpg";
import logo_dark from "/static/img/general/logo-dark.svg";
import logo_light from "/static/img/general/logo-light.svg";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        link={[
          {
            rel: "icon",
            href: {favicon},
          }, {
            rel: "image",
            href: {logo_OG}
          }, {
            rel: "image",
            href: {logo_dark}
          }, {
            rel: "image",
            href: {logo_light}
          },
          {
            rel: "image",
            href: {logo_light}
          }
        ]}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `theme-color`,
            content: `#F1AF30`,
          },
        ].concat(meta)}
      >
      <style type="text/css">{`
        html {
          overflow: initial !important;
          overflow-x: visible !important;
        }
        body {
          overflow-y: scroll !important;
          overflow-x: hidden !important;
        }
      `}</style>
      <link rel="preload" as="stylesheet" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.css" integrity="sha512-W9OWS8dgpQBw5Hb+tbMto1BMsHvYOXT/AFBGvASCPUJleaEdpOAN5lzgj9RrTbo3YrlR+m9xdOBccp8F+SFyQg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Koji is an early-stage investment firm focused on decentralised finance.`,
  author: `Koji Finance`
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
