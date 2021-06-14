/* eslint-disable */
import React from 'react';
import Article from '../components/article'
import SEO from '../components/seo';
import Layout from '../components/layout';
import Footer from '../components/footer'

const ReadPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Read"/>
        <Article read/>
        <Footer/>
      </Layout>
    </>
  )
}

export default ReadPage;