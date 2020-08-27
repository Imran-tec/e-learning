import React from 'react';
import logo from '../../images/kindpng_1576332.png';
import './Header.css'



const Header = () => {
    return (

      <div className="header">  
            <img src={logo} alt=""/> 
        <nav>
      <a href="/design">Graphic Design</a>
      <a href="/development">Web  Development</a>
      <a href="/seo">Programming language</a>
         </nav>

          </div>
      
        
    );
};

export default Header;