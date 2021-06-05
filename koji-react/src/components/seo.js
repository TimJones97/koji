// TODO change the defaults
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "/static/css/style.css";

const SEO = ({ seo }) => {
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
      title={'Tracer: Peer-to-Peer Finance'}
      titleTemplate={`%s`}
      description="The backbone of a secure, global financial network that provides strong foundations for future financial innovation."
      link={[
        {
          rel: "icon",
          href: '/favicon.png',
        }, {
          rel: "image",
          href: "/background.png"
        }, {
          rel: "image",
          href: "/logo-black.png"
        }, {
          rel: "image",
          href: "/logo-white.png"
        },
        {
          rel: "image",
          href: '/tracer-logo.png',
        }
      ]}
      meta={getMetaTags()}
    > 
      <meta http-equiv='cache-control' content='public, max-age=0, no-store, must-revalidate' />
      <meta name="image" content={imageUrl} />
      <meta name="twitter:title" content={fullSeo.metaTitle} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:description" content={fullSeo.metaDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content={fullSeo.metaTitle} />
      <meta name="og:description" content={fullSeo.metaDescription} />
      <meta name="og:image" content={imageUrl} />
      <link rel="preload" as="font" href="/fonts/Akkurat.ttf" type="font/ttf" crossorigin/>
      <link rel="preload" as="stylesheet" href="/css/main.css" />
      <link rel="preload" as="stylesheet" href="/css/careers.css" />
      <link rel="preload" as="stylesheet" href="/css/blog.css" />
    </Helmet>
  );
};


SEO.defaultProps = {
  seo : {
    metaTitle: "Tracer: Peer-to-Peer Finance",
    metaDescription: "The backbone of a secure, global financial network that provides strong foundations for future financial innovation.",
    shareImage: {childImageSharp: {original: { src: '/tcr_banner.png'}}},
    article: true,
  }
}

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  shareImage: PropTypes.string,
  article: PropTypes.bool,
};