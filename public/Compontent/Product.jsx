import React from 'react'
import "./Product.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../src/assets/CartSlice';





const Product = ({ Pitem }) => {
   const cart = useSelector((state) => state.cart.cart);
  
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  }
 
  const removeItemFromCart=(item) =>{
    dispatch(removeFromCart(item));
  }



  return (

    <div className="col-lg-3 my-4">
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage className='image-cart' src={Pitem.image} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle className='item-name'>{Pitem.name}</MDBCardTitle>
          <MDBCardText className='item-description'>
            {Pitem.description.length > 40 ? Pitem.description.substr(0, 65) + "..." : Pitem.description}
          </MDBCardText>
          <div className='price'>Price : ₹ {Pitem.price}</div>
          <br />
          {cart.some((c) => c.id === Pitem.id) ? 
              ( <MDBBtn onClick={() => removeItemFromCart(Pitem)}  outline className=' btn ' color='success'>REMOVE FROM CART</MDBBtn>)
              :
              ( <MDBBtn onClick={() => addItemToCart(Pitem)}  outline className=' btn ' color='success'>ADD TO CART</MDBBtn>)

          }
         
        </MDBCardBody>
      </MDBCard>
    </div>

  )
}

export default Product