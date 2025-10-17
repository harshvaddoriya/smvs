import React from 'react'
import Hero from "./Hero/Hero";
import About from "./About/About";
import Organization from './Organization/Organization';
import Founder from './Founder/Founder';
import NewsCard from './NewsCard/NewsCard';

function index() {
  return (
    <>
      <Hero />
      <About />
      <NewsCard />
      <Founder />
      <Organization />
    </>
  )
}

export default index