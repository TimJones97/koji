import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "/static/css/style.css";

const Header = ({ seo }) => {
  // Merge default and page-specific SEO values
  const fullSeo = { ...seo };
   const imageUrl =
      (process.env.GATSBY_ROOT_URL || "http://localhost:8000") +
      fullSeo.shareImage?.childImageSharp.original.src;

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
        'data-react-helmet': true
      });
    }
    return tags;
  };

  return (
    <Helmet
      title={'Koji'}
      titleTemplate={`%s`}
      description="Koji is an early-stage investment firm focused on decentralised finance."
      link={[
        {
          rel: "icon",
          href: '/img/general/favicon.png',
        }, {
          rel: "image",
          href: "/img/general/og-image.png"
        }, {
          rel: "image",
          href: "/img/general/logo-black.png"
        }, {
          rel: "image",
          href: "/img/general/logo-white.png"
        },
        {
          rel: "image",
          href: '/img/general/logo-light.png',
        }
      ]}
      meta={getMetaTags()}
    > 
      <meta httpEquiv='cache-control' content='public, max-age=0, no-store, must-revalidate' />
      <meta name="image" content={imageUrl} />
      <meta name="twitter:title" content={fullSeo.metaTitle} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:description" content={fullSeo.metaDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content={fullSeo.metaTitle} />
      <meta name="og:description" content={fullSeo.metaDescription} />
      <meta name="og:image" content={imageUrl} />
      <link rel="preload" as="stylesheet" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.css" integrity="sha512-W9OWS8dgpQBw5Hb+tbMto1BMsHvYOXT/AFBGvASCPUJleaEdpOAN5lzgj9RrTbo3YrlR+m9xdOBccp8F+SFyQg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Helmet>
  );
};


Header.defaultProps = {
  seo : {
    metaTitle: "Koji",
    metaDescription: "Koji is an early-stage investment firm focused on decentralised finance.",
    shareImage: {childImageSharp: {original: { src: '/img/general/og-image.png'}}},
    article: true,
  }
}

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  shareImage: PropTypes.string,
  article: PropTypes.bool,
};