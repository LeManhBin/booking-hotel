import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__body'>
            <div className='footer__contact'>
                <h2>Logo</h2>
                <div className='footer__contact--info'>
                    <p><span>Call. </span><b>(+84) 0365160470</b></p>
                    <p><span>Email. </span><b>llemanhbin@gmail.com</b></p>
                </div>
                <div className='footer__contact--address'>
                    Đ. Nam Kỳ Khởi Nghĩa, Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng   
                </div>
            </div>
            <div className='footer__link'>
                <ul>
                    <li>About Us</li>
                    <li>Work Here</li>
                    <li>Team</li>
                    <li>Happenings</li>
                </ul>
                <ul>
                    <li>Support</li>
                    <li>FAQs</li>
                    <li>Warranty</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='footer__sign'>
                <h2>Get Our Newsletter</h2>
                <div className='footer__sign--form'>
                    <input className='footer__sign--input' type="text" placeholder='Your email here' />
                    <button className='footer__sign--btn'>Sign In</button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer