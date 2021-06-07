/* eslint-disable */
import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Article from '../components/article'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const ReadPage = () => {
  return (
    <>
      <Header allowOverflow/>
      <Navbar background="light brown-bg"/>
      <Article read/>
      <Footer/>
      <Scripts/>
    </>
  )
}

export default ReadPage;