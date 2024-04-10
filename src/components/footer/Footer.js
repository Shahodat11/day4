import React from 'react'
import '../footer/footer.css'
import logo from '../images/LOGO (4).svg'
import img from '../images/Group 875.png'
import group from '../images/Group 878.svg'

function Footer() {
  return (
    <footer>
  <div className="container">
    <div className="footer-content">
<div className="right-content">
      <div className="right">
        <h5>
        <img src={logo} alt="" />
        </h5>
      </div>
        <div className="right">
          <h5>Каталог</h5>
          <h5>о компании</h5>
          <h5>Индивидуальная </h5>
          <h5>Партнерам</h5>
        </div>
        <div className='right'>
          <h5>2D, 3D модели</h5>
          <h5>Шоу-румы</h5>
          <h5>Дилерам</h5>
          <h5>Контакты</h5>
          <h5>Конфигуратор</h5>
        </div>
        <div class="right">
          <h5><img src={img} alt="" /></h5>
          <h5>+38 (099)-638-45-37</h5>
          <img src={group} alt="" />
        </div>
      </div>
    </div>
  </div>   
</footer>
  )
}

export default Footer