import React from 'react'
import '../main/main.css'
import Img from '../images/Rectangle 13.svg'
import Img1 from '../images/Rectangle 13 (1).svg'
import Img2 from '../images/Rectangle 13 (2).svg'

function Main() {
  const data = [
  {
    id: 1,
    title: "Станки и оборудование",
    img: `${Img}`,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
  },
  {
    id: 2,
    title: "Компоненты и запчасти",
    img: `${Img1}`,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
  },
  {
    id: 3,
    title: "Станки и оборудование",
    img: `${Img2}`,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
  },
];
let mapCard = data?.map((products) => (
  <div className="products__card1" key={products.id}>
      <img src={products.img} alt="product-img" />
    <h2 className='title'>{products.title}</h2>
    <h6 className='price'>{products.price} </h6>
  </div>
));
  return (
    <>
    <div className="container">
      <div className="nav-links">
        <h1>Выполненные работы</h1>
        <p>Мы собрали информацию по грузам, которые мы уже доставили.У нас специальный подход к каждому виду товаров.</p>
      </div>
      <div className="cardss">
        <mapCar/>
      </div>
      <div className="cards-productss">
        {mapCard}
      </div>
    </div>
    </>
  )
}

export default Main