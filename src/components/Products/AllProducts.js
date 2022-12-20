import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import ReactPaginate from 'react-paginate'
import { Helmet } from 'react-helmet-async'


import {VscTriangleRight} from 'react-icons/vsc'
import {FaArrowLeft , FaArrowRight} from 'react-icons/fa'

import {productArr} from '../DataArrays/AllProducts'


function AllProducts() {
  
  
  //pagination 
  const [arr, setArr] = useState(productArr)
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 15;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(Object.entries(arr).length / usersPerPage);
  const pageChange = ({selected}) => {
  setPageNumber(selected)
  }
  console.log(arr)


  const productsList = arr.slice(pagesVisited, pagesVisited + usersPerPage).map((product,index)=>{
  

    return  <Link to={`/production/${product.imdbID}`}>
                <div className="book">
                  <div className="img-wrapper">
                    <img src={product.Images[0]} alt="" />
                    <div>{product.imdbRating}</div>
                  </div>
                  <span className="book-title">{product.Released}</span>
                  <span className="book-author">{product.Director}</span>
                  <span className="date">{product.Title}</span>
                </div>
            </Link>


  })


  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
      
      <Helmet>
          <title>ფილმები</title>
        </Helmet>
      
      <div className="about-top padding-280px">
        <span className="big">ფილმები</span>
        <div className="smalls">
           
            <span>ფილმები</span>
        </div>
       </div>
       <div className="landing-container margin-280px">
    
      <div className="right-landing">
      
       {productsList}
       
       
      <div className='pagination'>
         <ReactPaginate 
         previousLabel = {<FaArrowLeft/>}
         nextLabel = {<FaArrowRight/>}
        pageCount = {pageCount}
        onPageChange = {pageChange}
        containerClassName = {"paginationButtons"}
        previousLinkClassName = {"previusButton"}
        nextLinkClassName = { "nextButton"}
        disabledClassName = {"disabledButton"}
        activeClassName = {"activeButton"}
        onClick = {window.scrollTo({top: 0, behavior: 'smooth'})}
        />
      </div>
      
       

      
       
      </div>
       </div>
       

  </motion.div>
  )
}

export default AllProducts