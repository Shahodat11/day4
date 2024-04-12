import React from 'react'
import '../footerTop/footerTop.css'
import image from '../images/image 1.svg'
import main from '../images/clients logo.svg'
import mainLogo from '../images/our team.svg'

function FooterTop() {
  return (
    <>
    <div className="container">
      <img src={main} alt="" />
      <img src={mainLogo} alt="" />
    <div className="nav-link__img">
        <img src={image} alt="" />
    </div>        
    </div>

    </>
  )
}

export default FooterTop