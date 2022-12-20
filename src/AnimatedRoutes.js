import React from 'react'
import {Route , Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import About from './components/About'

import Header from './components/Header';

import TermsAndConditions from './components/TermsAndConditions'
import AllProducts from './components/Products/AllProducts'




import AllProducts1 from './components/Products/AllProducts1'


import ScrollToTop from './components/Contexts/ScrollToTop'
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <Header/>
      <AnimatePresence>
       <ScrollToTop/>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/terms' element={<TermsAndConditions/>}/>
       
        <Route path='/production/:id' element={<AllProducts1/>}/>
       
        
      </Routes>
      
      </AnimatePresence>
    
    </>
  )
}

export default AnimatedRoutes