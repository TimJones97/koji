import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Homepage from '../components/homepage'
import Thesis from '../components/thesis'
import CircleNav from '../components/circlenav'
import Scripts from '../components/scripts'

const Index = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <CircleNav location="home"/>
        <Homepage/>
        <CircleNav location="thesis"/>
        <Thesis/>
        <Scripts/>
    </>
  )
}

export default Index;