import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../components/images/logo.png"
const Footer = () => {
  return (
    <footer>
      <div className='bg-dark'>
        <div className='row'>
          <div className='col-10 col-md-6 a'>
            <Link to="/"><img src={logo} className='img-fluid m-4 ab' style={{ height: "70px" }} alt='' /></Link>
          </div>
          <div className='col-3 col-md-2 m-auto text-light'><p className='h6'><u>Privacy Policy</u></p></div>
          <div className='col-3 col-md-2 m-auto text-light'><p className='h6'><u>For Parents FAQ</u></p></div>
          <div className='col-3 col-md-2 m-auto text-light'><p className='h6'><u>Terms of Service</u></p></div>
        </div>
        <div className='row m-3' >
          <p className='h6 text-center text-light text-center'>Copyright&copy;Garena International.Trademarks belong to their respective owners.All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer