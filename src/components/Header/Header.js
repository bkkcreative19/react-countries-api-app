import React from "react";

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <h1>Where in the world?</h1>
        <div className='theme'>
          <i className='far fa-moon'></i>
          <h3>Dark Mode</h3>
        </div>
      </div>
    </nav>
  );
};

export default Header;
