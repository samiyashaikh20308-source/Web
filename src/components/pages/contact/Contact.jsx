import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className="pageC">
      <h1 className='heading'>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder=" Your UserName" />

        <input type="email" placeholder="Your Email" />

        <input type="password" placeholder="Your Password" />

        <input type="confirm password" placeholder="confirm password" />  

        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree to the Terms & Conditions</label>
        </div>

        {/*<input type="checkbox"/>I agree to the Terms and Conditions*/}

        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Contact
