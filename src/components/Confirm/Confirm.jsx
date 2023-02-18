import React from 'react'
import './Confirm.scss'
const Confirm = ({setIsBooking}) => {
  return (
    <div className='confirm-container'>
        <h3>Please confirm the information</h3>
        <i className="fa-solid fa-x" onClick={() => setIsBooking(false)}></i>
        <div className='confirm-form'>
            <form>
                <div className='form-input'>
                    <label>Full Name</label>
                    <input type="text" placeholder='enter your full name'/>
                </div>
                <div className='form-input'>
                    <label>Phone Number</label>
                    <input type="text" placeholder='enter your phone number'/>
                </div>
                <div className='form-input'>
                    <label>Email</label>
                    <input type="email" placeholder='enter your email'/>
                </div>
                <div className='form-input'>
                    <label>Address</label>
                    <input type="text" placeholder='enter your address'/>
                </div>
                <div className='form-input'>
                    <label>Date Of Birth</label>
                    <input type="date" placeholder='enter your date of birth'/>
                </div>
                <button>Confirm</button>
            </form>
        </div>
    </div>
  )
}

export default Confirm