import React from 'react';
import "./Header.css";
import img from "/public/dominoes-pizza.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Header = () => {
const cart = useSelector((state) => state.cart.cart);
const nav = useNavigate();

const gotohome =()=>{
    nav("/");
};
const gotocart=()=>{
nav("/cart");
};


  return (
 <>
  <div className='header'>
<div className='header-left'>
    <img className='imgg' src={img} />
</div>


 <div onClick={()=>gotohome()} className='home-back'>
 <HomeIcon/>
 </div>

<div onClick={()=>gotocart()} className='cart-name'>Cart</div>
<div onClick={()=>gotocart()} className='cart'>
  <ShoppingCartIcon/>
</div>
<span  onClick={()=>gotocart()} className='counter'>{cart.length}</span>
<div className="className">
    <h4 className='header-right'>{(`hello, Abhi`)}</h4>
    <h4 className='header-right'>7845902318</h4>
</div>

  </div>
 </>
  )
}

export default Header;