import React, { Component } from 'react';
import { Button } from '@shopify/polaris';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

   render() {
      return (
         <header className="header">
            <div className="header__container">
               <Link 
                  to="/"
                  className='header__logo'>
                  Apollo
               </Link>
               <Button plain data-polaris-unstyled>
                  <span className="header__signout">Sign out</span>
               </Button>
            </div>
         </header>
      );
   }
}

export default Header;
