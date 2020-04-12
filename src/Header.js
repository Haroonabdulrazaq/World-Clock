import React from 'react';
import './Header.css';
import './App.css';

 class Header extends React.Component{
     render(){
        return (
            <div className="header">
             <h1 className="header-text">World Clock</h1>
             <a href="#form-div" className="anchor anchor-discover">Discover Your Partners Time</a>
            </div>
          );
     }
     }


 

export default Header;