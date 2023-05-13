import React from 'react'
import Pizza from '../Data/Pizza'
import Product from './Product'
import { useSelector } from 'react-redux'


const Body = () => {

  const data = Pizza;
  // console.log(data);

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart); /* initially empty array value*/


  return (

    <div className="container">

      <div className="row">
        {data.map((item, index) => {
          return (
            <Product Pitem={item} key={index} />
          )
        })}

      </div>
    </div>


  )
}

export default Body