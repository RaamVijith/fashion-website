import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section id='About' className='footer'>
      <div className='footer-top'>
        <div className='footer-top1'>
          <h6>Popular Search</h6>
          <p>Apartment For Rent</p>
          <p>Apartment Low To Hide</p>
          <p>Offices For Buy</p>
          <p>office For Rent</p>
          <p>TownHime For Rent</p>
          <p>TownHime For Buy</p>
          <p>Shop For Rent</p>
        </div>

        <div className='footer-top1'>
          <h6>Homepress Market</h6>
          <p>Las Vegas Office</p>
          <p>Apartment Low To Hide</p>
          <p>Plipine Office</p>
          <p>office For Rent</p>
          <p>TownHime For Rent</p>
          <p>Los Angel Apartment</p>
        </div>

        <div className='footer-top1'>
          <h6>Quick Links</h6>
          <p>APricing Plan</p>
          <p>XStore Services</p>
          <p>About Us</p>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
          <p>Get Rewarded</p>
          <p>Contect Us</p>
        </div>

        <div className='footer-top2'>
          <h6>Sign Up For Newsletter</h6>
          <p>Enter your email below to recive a 30$ copen, special offers, discounts and more!.</p>
          <input placeholder='Your email Address'/>
          <p>Follow US</p>
          
        </div>
      </div>

      <hr/>

      <div className='footer-botom'>
        <p>Copyright  2024 Fasion e-com. Solution by Fashion E-com</p>
      </div>
    </section>
  )
}

export default Footer