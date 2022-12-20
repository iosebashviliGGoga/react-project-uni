import React , { useState, useEffect , useContext , useRef}from 'react'
import {useNavigate,Link  } from 'react-router-dom'
import { CartContext } from './Contexts/Context'

import {FaInstagram , FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

function Header() {
  const handleSlug = (slug) =>{
     // console.log(window.location.pathname.includes(slug) );
      //console.log(window.location.pathname)
      
     
      if(window.location.pathname == slug){
            return true
      } else return false
      
  }
  const navigate = useNavigate();

  const [searchClick, setSearchClick] = useState(false)
  const [searchItem, setSearchItem] = useState('')


  const {search} = useContext(CartContext)
  const {language} = useContext(CartContext)
  

  const ref = useRef();
  
  useEffect(() => {   
      const burgerButtonToggler = ref.current

  }, []);

  const handleBurgerButton = () => {
    
    ref.current.checked = false
  };
  const handleLogoClick = () =>{
    navigate('/')
  }


  //const [languageId , setLanguageId] = useState(1)
 
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if(searchItem){
        navigate('/search')
      }
     
    }
   }
   const [languageId, setLanguageId] = useState(true)

   





   const handleLanguageChange = e => {
     if(!e.target.className){
      setLanguageId((prev)=> !prev)
     }
   }


  const styles = {
   // display:  searchClick ?  "none" : "",
    height: searchClick ?  "0" : "",
    opacity:searchClick ?  "0" : "1",
    transition: 'all 0.5s ease-out'
  }
  const styles1 = {
   // display: !searchClick ?  "none" : "",
    height: !searchClick ?  "0" : "",
    opacity:!searchClick ?  "0" : "1",
    transition: 'all 0.5s ease-out'
  }
  return (
    <>
   
    <div className="header-bottom padding-280px" style={styles }>
    
    <div>
        <nav>
            <Link className={  handleSlug('/') ?  "active"   :   ""} to=''>მთავარი</Link>
            <Link className={  handleSlug('/about') ?  "active"   :   ""} to='/about'>ჩვენს შესახებ</Link>
            
            <Link className={  handleSlug('/terms') ?  "active"   :   ""} to='/terms'>წესები და პირობები</Link>
        </nav>
        <div className="nav-right">
       
        
        <div className="languager">
            <span className={languageId ? 'lang-active' : ""} onClick={(e)=> handleLanguageChange(e)}>GE</span>
            <span onClick={(e)=> handleLanguageChange(e)} className={languageId ? "" : 'lang-active'}>EN</span>
        </div>
        
        </div>
    </div>
    </div>
    
    <section className="top-nav padding-280px">
    <div>
   
    </div>
    <input id="menu-toggle" type="checkbox" ref={ref} />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
            <Link  to='/' onClick={handleBurgerButton} className={  handleSlug('/') ?  "active"   :   ""}>მთავარი</Link>
            <Link to='/about' onClick={handleBurgerButton} className={  handleSlug('/about') ?  "active"   :   ""}>ჩვენს შესახებ</Link>
            
            <Link to='/terms' onClick={handleBurgerButton} className={  handleSlug('/terms') ?  "active"   :   ""}>წესები და პირობები</Link>
    </ul>
  </section>


    </>
  )
}

export default Header