import React from 'react';

function Cards() {
  function scrollCards(evt: React.SyntheticEvent) {
    console.log(evt.target);
  }
  return (
    <div className="container" onDragStart={scrollCards}>
      <div className="container__info">
        <h1 className="container__title">
          Список заказов
        </h1>
        <button className="button button_type_filter" type="button" />
      </div>
      <ul className="container__cards">
        <li className="container__card">
          <ul className="container__product container__product_type_order">
            <li className="container__description container__description_type_info">
              <h2 className="container__subtitle">
                Заказ №123
              </h2>
              <span>
                305
              </span>
            </li>
            <li className="container__description container__description_type_time">
              <span>
                Сегодня: 12:00
              </span>
            </li>
          </ul>
          <ul className="container__product container__product_type_description">
            <li className="container__description container__description_type_item">- товаров 5шт</li>
            <li className="container__description container__description_type_product">- наименований 3шт</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Cards;