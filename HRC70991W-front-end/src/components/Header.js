import React from "react";
import "./Header.css";
import ABC_product from './images/abc_products.png';
import hrclogo from './images/hrcwhite.svg';

function Header() {
  return (
    <div className="header">
      <div className = 'header_abc_products'>
        <img alt="ABC Products" src={ABC_product}/>
      </div>
      <div className ='header_hrc_logo'>
        <img alt="hrc_logo" src={hrclogo}/>
      </div>
      <div className="header_invoice_list">Invoice List</div>
    </div>
  );
}

export default Header;
