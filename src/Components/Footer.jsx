import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="first">
            <h3>CATEGORIES</h3><br />
            <h4>Web Builder</h4><br />
            <h4>Hosting</h4><br />
            <h4>Data Center</h4><br />
            <h4>Robotic-Automation</h4><br />
        </div>
        <div className='second'>
            <h3>CONTACT</h3><br />
            <h4>Contact</h4><br />
            <h4>Privacy Policy</h4><br />
            <h4>Terms of Service</h4><br />
            <h4>Categories</h4><br />
            <h4>About</h4><br />
        </div>
        <div className="third">
           <select name="" id="">
            <option value="">United States</option>
            <option value="">America</option>
            <option value="">India</option>
            <option value="">SouthAfrica</option>
           </select>
        </div>
    </div>
  )
}

export default Footer