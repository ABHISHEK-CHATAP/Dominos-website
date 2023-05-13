import React from 'react'
import "./Footer.css"
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
    <MDBFooter  className='text-center text-lg-left footer'>
      <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright : {' '}
        <a className='text-light' href='https://pizzaonline.dominos.co.in/'>
          Domino's.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer