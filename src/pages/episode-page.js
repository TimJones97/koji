/* eslint-disable */
import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Article from '../components/article'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const EpisodePage = () => {
  return (
    <>
      <Header allowOverflow/>
      <Navbar background="light brown-bg"/>
      <Article/>
      <Footer/>
      <Scripts/>
    </>
  )
}

export default EpisodePage;