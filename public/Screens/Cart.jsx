import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Compontent/Header';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { decrementQuantity } from '../../src/assets/CartSlice';
import { IncrementQuantity } from '../../src/assets/CartSlice';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from '../Compontent/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Cart = () => {
    //   Access the cards in this page by useSelector
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const increase = (item) => {
        dispatch(IncrementQuantity(item));
    }

    const decrease = (item) => {
        dispatch(decrementQuantity(item))
    }


    // sub--Total value expression
    const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
    // console.log(total)   perfect value given


    const notify = (item) => {
        toast.success('🦄 Order Placed..!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }




    return (
        <>
            <body className='BODY'>
                <Header />
                <h5 className='heading mt-2 mx-4'>In your Cart {cart.length} items are added</h5>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-12 bg-light top-row" >

                            {
                                cart.map((item, index) => {
                                    return (
                                        <div className='carted' key={index}>

                                            <MDBCard className='main-card'>
                                                <MDBRow className='g-0 CARDS'>
                                                    <MDBCol md='2' sm="2">
                                                        <MDBCardImage className='carted-image' src={item.image} alt='...' fluid />
                                                    </MDBCol>
                                                    <MDBCol md='8' sm="8">
                                                        <MDBCardBody>
                                                            <MDBCardTitle className='carted-name'>{item.name}</MDBCardTitle>
                                                            <MDBCardText className='carted-description'>
                                                                {item.description.length > 70 ? item.description.substr(0, 115) + "..." : item.description}
                                                                <br /> <span className='hsix'>Regular | 100% Thin Wheat crust</span>
                                                            </MDBCardText>
                                                        </MDBCardBody>
                                                    </MDBCol>

                                                    <MDBCol md='1 ' sm="1" className='quantity'>
                                                        <MDBCardText className='cart-total'>
                                                            Total : ₹ {item.price * item.quantity}
                                                        </MDBCardText>
                                                    </MDBCol>

                                                    <MDBCol md='1' sm="1" className='incre-decre'>
                                                        <MDBBtn onClick={() => increase(item)} className='button plus ' tag='a' color='success' outline floating>
                                                            + </MDBBtn>
                                                        <div className='qty'>
                                                            {item.quantity}
                                                        </div>
                                                        <MDBBtn onClick={() => decrease(item)} className='button minus' tag='a' color='success' outline floating>
                                                            - </MDBBtn>
                                                    </MDBCol>

                                                </MDBRow>
                                            </MDBCard>
                                        </div>
                                    )
                                })
                            }



                        </div>
                        <div className="col-lg-5 col-md-5 col-12 Top-second-column">

                            <div className='cart-text'> Choose a delivery address</div>

                            <div className='icon mt-2'>
                                <LocationOnIcon style={{ color: "#2e7d32", fontSize: 19 }} />
                                <div className='cartright-top'>
                                    <h5>Select Location</h5>
                                    <h6>
                                        Please select location, so that we can find a restaurent that delivers to you !
                                    </h6>
                                    <MDBBtn outline className=' location-btn ' color='success'>ADD LOCATION</MDBBtn>
                                </div>
                            </div>

                            <hr />

                            <div className='icon mt-2'>
                                <LocationOnIcon style={{ color: "#2e7d32", fontSize: 19 }} />
                                <div className='cartright-top'>
                                    <h5>Login to use your saved adressess..</h5>
                                    <MDBBtn outline className=' adress-btn ' color='success'>MY ADDRESS</MDBBtn>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* second half card system */}
                {/* second half card system */}
                {/* second half card system */}
                {/* second half card system */}
                {/* second half card system */}
                {/* second half card system */}
                {/* second half card system */}
                {/* second half 2nd card system */}


                <br />



                <div className="container">
                    <div className="row ">
                        <div className="col-lg-7 col-md-7 col-12  carted-card">

                            <div className='cart-left'>
                                <MDBRow className='row-cols-1 row-cols-md-3 g-2'>
                                    <MDBCol className='mx-2 dessert-cards'>
                                        <MDBCard className='h-80 mt-1  '>
                                            <MDBCardImage className='picture'
                                                src="https://images.dominos.co.in/cart/CMB1054.jpg"
                                                alt='...'
                                                position='top'
                                            />


                                            <h6 className='text-muted mt-1'>ADD</h6>

                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol className=' dessert-cards'>
                                        <MDBCard className='h-80 mt-1 '>
                                            <MDBCardImage className='picture'
                                                src="https://images.dominos.co.in/cart/CMB1054.jpg"
                                                alt='...'
                                                position='top'
                                            />


                                            <h6 className='text-muted mt-1'>ADD</h6>

                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol className=' dessert-cards'>
                                        <MDBCard className='h-80 mt-1'>
                                            <MDBCardImage className='picture'
                                                src='https://images.dominos.co.in/cart/BEV0119_1.jpg'
                                                alt='...'
                                                position='top'
                                            />


                                            <h6 className='text-muted mt-1 '>ADD</h6>

                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol className=' dessert-cards'>
                                        <MDBCard className='h-80 mt-1'>
                                            <MDBCardImage className='picture'
                                                src='https://images.dominos.co.in/cart/Parcel_Veg.jpg'
                                                alt='...'
                                                position='top'
                                            />


                                            <h6 className='text-muted mt-1'>ADD</h6>

                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol className=' dessert-cards'>
                                        <MDBCard className='h-80 mt-1'>
                                            <MDBCardImage className='picture'
                                                src='https://images.dominos.co.in/cart/Parcel_Veg.jpg'
                                                alt='...'
                                                position='top'
                                            />


                                            <h6 className='text-muted mt-1'>ADD</h6>

                                        </MDBCard>
                                    </MDBCol>

                                </MDBRow>
                            </div>
                        </div>




                        <div className="col-lg-5 col-md-5 col-12 Second-row-bottom-corner ">

                            <div className='cart-right'>
                                <div className='cart-text mt-2 mx-2'> Price Details</div>

                                <div className='subtotal'>
                                    <h5>Sub-Total</h5>
                                    <h5>₹ {total} /-</h5>
                                </div>

                                <div className='subtotal '>
                                    <h5>Discount</h5>
                                    <h5>--</h5>
                                </div>

                                <div className='subtotal '>
                                    <h5>Taxes & charges *</h5>
                                    <h5>₹ 10.13 /-</h5>
                                </div>

                                <div className='subtotal '>
                                    <h5>Grand Total</h5>
                                    <h5>₹ {total + 10.13} /-</h5>
                                </div>
                                <hr />
                                <MDBBtn onClick={notify} className='mx-4  ' color='success'>Place Order</MDBBtn>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="colored"
                                />
                            </div>


                        </div>
                    </div>
                </div>

            </body>
            <Footer />


        </>
    )
}

export default Cart