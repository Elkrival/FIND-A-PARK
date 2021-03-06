import React, { Component }   from 'react';
import { Link }               from 'react-router';
import '../css/Header.css';

class Header extends Component {
  render(){
    return (
      <div>
        <div className="Header2">
          <div className="header-link"><Link to="/">Home</Link></div>
          <div className="header-link"><Link to="/viewAllFavorites">View All Favorites</Link></div>
          <div className="header-link"><Link to="/about">About Me</Link></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
