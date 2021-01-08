import React, { useState } from 'react';
import './navbars.scss';


class Navbars extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen:  []
       //storageOptions: this.props.product.variants[0].pricingOptions
    }
    
 };
 componentDidMount() { 
};
myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
render() {
  return (
    <div>
      <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="#" class="icon" onClick={() => this.myFunction()}>
    <i class="fa fa-bars"></i>
  </a>
</div>
    </div>
  );
}
}

export default Navbars;