import React from 'react'
import '../mainPastavki/mainPastavki.css'
import Svg from '../images/img-1.png'
import Svg1 from '../images/img-2.png'
import Svg2 from '../images/img-3.png'

function MainPastavki() {
  return (
    <>
          <div class="container">
        <div class="content">
          <h1>Этапы поставки</h1>
          <div class="cards">
            <div class="card">
              <div class="card-child">
                <img src={Svg} alt="" />
              </div>
              <div class="card-child">
                <h2>Предложение от продавца</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elit duis tristique sollicitudin nibh sit amet. Ultrices eros
                  in cursus turpis massa tincidunt. Venenatis urna cursus eget
                  nunc scelerisque viverra mauris in.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-child">
                <img src={Svg1} alt="" />
              </div>
              <div class="card-child">
                <h2>Доставка</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elit duis tristique sollicitudin nibh sit amet. Ultrices eros
                  in cursus turpis massa tincidunt. Venenatis urna cursus eget
                  nunc scelerisque viverra mauris in.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-child">
                <img src={Svg2} alt="" />
              </div>
              <div class="card-child">
                <h2>Установка у клиента</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elit duis tristique sollicitudin nibh sit amet. Ultrices eros
                  in cursus turpis massa tincidunt. Venenatis urna cursus eget
                  nunc scelerisque viverra mauris in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPastavki