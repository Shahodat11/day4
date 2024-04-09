import React from 'react'
import '../mainCards/mainCards.css'
import Icon from '../images/icon.svg'
import Icon1 from '../images/icon (1).svg'
import Icon2 from '../images/icon (2).svg'

function MainCards() {
   const data = [
  {
    id: 1,
    title: "Поиск производителей по товару",
    img: `${Icon}`,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
  {
    id: 2,
    title: "Поиск конкретного производителя",
    img: `${Icon1}`,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.660",
  },
  {
    id: 3,
    title: "Доставка образцовтоваров",
    img: `${Icon2}`,
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
];
let mapCard = data?.map((products) => (
  <div className="products__card" key={products.id}>
      <img src={products.img} alt="product-img" />
    <h2 className='title'>{products.title}</h2>
    <h6 className='price'>{products.price} </h6>
  </div>
));
  return (
    <>
    <div className="container">
      <div className="cards">
        <mapCar/>
      </div>
      <div className="cards-products">
        {mapCard}
      </div>
    </div>
    </>
  )
}

export default MainCards