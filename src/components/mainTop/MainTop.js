import React from 'react'
import '../mainTop/mainTop.css'
import Main from '../images/learn more.svg'
import Cargo from '../images/adir-Cargo-Insurance 1.svg'

function MainTop() {
  return (
    <>
    <div className="container">
      <div className="nav-link1">
        <div className="nav1">
          <h2>Поставщик Дальнего Востока</h2>
          <p>Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.</p>
          <img className='img' src={Main} alt="" />    
        </div>
        <img className='img1' src={Cargo} alt="" />
      </div>
    </div>
    </>
  )
}

export default MainTop