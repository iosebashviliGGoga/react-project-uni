
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes';

import {CartContext} from './components/Contexts/Context'
import {useState} from 'react'


import { Helmet, HelmetProvider } from 'react-helmet-async';
function App() {
 
  const [search,setSearch] = useState('')
  const [language , setLanguage] = useState(1)
  const [bag, setBag] = useState([])
  return (
    <>
   
   <BrowserRouter>
   <HelmetProvider>
   <CartContext.Provider
      value={{search, setSearch , language, setLanguage, bag, setBag}}
   >
     <AnimatedRoutes/>
     </CartContext.Provider>
     </HelmetProvider>
   </BrowserRouter>
    </>
  );
}

export default App;
