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
              <h2 className="container__subtitle container__subtitle_type_marker">
                305 Р
              </h2>
            </li>
            <li className="container__description container__description_type_time">
              <span className="container__marker container__marker_type_data">
                Сегодня: 12:00
              </span>
            </li>
          </ul>
          <ul className="container__product container__product_type_description">
            <li className="container__description container__description_type_item">
              <span className="container__marker">
                - товаров 5шт
              </span>
            </li>
            <li className="container__description container__description_type_product">
              <span className="container__marker">
                - наименований 3шт
              </span></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Cards;