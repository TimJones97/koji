/* eslint-disable */
import React from 'react';
import Article from '../components/article'
import SEO from '../components/seo';
import Layout from '../components/layout';
import Footer from '../components/footer'

const EpisodePage = () => {
  return (
    <>
      <Layout>
        <SEO title="Listen"/>
        <Article/>
        <Footer/>
      </Layout>
    </>
  )
}

export default EpisodePage;