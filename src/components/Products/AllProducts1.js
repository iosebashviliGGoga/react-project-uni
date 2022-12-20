import React, {useState, useEffect, useContext } from 'react'
import { Link , useParams} from 'react-router-dom'
import {motion} from 'framer-motion'

import { Helmet } from 'react-helmet-async'

import { CartContext } from '../Contexts/Context'


import {VscTriangleRight} from 'react-icons/vsc'
import{HiOutlineShoppingBag} from 'react-icons/hi'

import {productArr} from '../DataArrays/AllProducts'
function AllProducts1() {
  
    const id = useParams();
   
    
    const [arr, setArr] = useState(productArr)
    
    const {bag} = useContext(CartContext)
    const {setBag} = useContext(CartContext)
   
    const exacter = arr.find((product) => product.imdbID == id.id)
   
   

  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
      
      
      <div className="about-top padding-280px">
        <span className="big">ფილმები</span>
        <div className="smalls">
            <span>მთავარი</span>
            <VscTriangleRight/>
            <span>ფილმები</span>
            
        </div>
       </div>
       <div className="landing-container margin-280px">
        <div className="products1">
        <div className="products1-img-wrapper">
                <img src={exacter.Images[0]} alt="" />
            </div>
            <div className="products1-info">
                <div className="products1-info-divs">
                    <span>{exacter.Title}</span>
                    <span className='grayText'>{exacter.Director}</span>
                    <span>{exacter.Year}</span>
                    <span className='grayText'>აღწერა:</span>
                    <span className='smalltext'>{exacter.Plot}</span>
                </div>
                <div className="products1-info-divs">
                <div className="ISBN">
                <span className='grayText'>IMDB rating</span>
                <span className='grayText'>Meta Score</span>
                <span className='grayText'>Rated:</span>
                <span className='grayText'>Runtime</span>
                </div>
                <div className="ISSN">
                <span>{exacter.imdbRating}</span>
               <span>{exacter.Metascore}</span>
               <span>{exacter.Rated}</span>
               <span>{exacter.Runtime}</span>
                </div>
                
                
                </div>
               
                <div className="products1-info-divs">
                  
                    <div className="">
                        <span onClick={() => setBag((prev)=> [...prev,'object'])}>ფავორიტებში დამატება <HiOutlineShoppingBag/></span> 
                        
                    </div>
                </div>
            </div>
            
        </div>
      
       </div>
       

  </motion.div>
  )
}

export default AllProducts1