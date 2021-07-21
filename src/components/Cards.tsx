import React from 'react';
import Popup from './Popup';

interface popup {
  openedPopup: () => void,
  closePopup: () => void,
  status: boolean,
  prices: any,
}

interface price {
  id: string,
  number: string,
  sale: number,
  date: string,
  goods: any
}
interface good {
  count: number,
  name: string,
  id: string,
  price: number
}


function Cards(props: popup) {
  const [order, setOrder]: any = React.useState();

  function getOrder(el: price) {
    setOrder(el);
  }
  function scrollCards(evt: React.SyntheticEvent) {
    evt.preventDefault();
  }

  const off: string = props.status ? 'container_off' : '';
  return (
    <React.Fragment>
      <div className={`container ${off}`}>
        <div className="container__info">
          <h1 className="container__title">
            Список заказов
          </h1>
          <button className="button button_type_filter" type="button" />
        </div>
        <ul className="container__cards" onMouseDown={scrollCards}>
        { props.prices.map((el: price) => {
          return (
            <li
              key={el.id}
              className="container__card"
              onDrag={scrollCards}
              onClick={() => {
                getOrder(el);
                props.openedPopup();
              }}
            >
              <ul className="container__product container__product_type_order">
                <li className="container__description container__description_type_info">
                  <h2 className="container__subtitle">
                    Заказ №{el.number}
                  </h2>
                  <h2 className="container__subtitle container__subtitle_type_marker">
                    {el.sale} Р
                  </h2>
                </li>
                <li className="container__description container__description_type_time">
                  <span className="container__marker container__marker_type_data">
                    {el.date && el.date.replace('T', ': ').replaceAll('-', '.').substring(0, Number(el.date.length) - 2)}
                  </span>
                </li>
              </ul>
              <ul className="container__product container__product_type_description">
                <li className="container__description container__description_type_item">
                  <span className="container__marker">
                    - товаров {el.goods.reduce((e: any, cur: good) => e + cur.count, 0)}шт
                  </span>
                </li>
                <li className="container__description container__description_type_product">
                  <span className="container__marker">
                  - наименований {el.goods.length}шт
                  </span></li>
              </ul>
            </li>)}
        )}
          </ul>
      </div>
      <Popup
        closePopup={props.closePopup}
        el={order}
        status={props.status}
      />
    </React.Fragment>
  )
}

export default Cards;