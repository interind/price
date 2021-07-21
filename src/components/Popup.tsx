import React from "react";

interface element {
  status: boolean,
  closePopup: () => void,
  el: any,
}

interface good {
  count: number,
  name: string,
  id: string,
  price: number
}

function Popup(props: element) {
  const classStatus = props.status && 'container_opened';
  const [buttonActive, setButtonActive] = React.useState(false);
  const [sale, setSale] = React.useState('');

  function getSales() {
    const sale: string = (props.el.sale / props.el.goods.reduce((e: any, cur: good) => e + cur.price, 0) * 100).toFixed(2);
    setSale(sale);
    setButtonActive(true);
  }

  return (
    <div className={`container container_type_popup ${classStatus}`}>
      <div className="container__card container__card_type_popup">
        <div className="container__info">
          <div className="container__info container__info_type_popup">
            <h2 className="container__subtitle container__subtitle_type_popup">
              Заказ №{props.el && props.el.number}
            </h2>
            <span className="container__marker container__marker_type_popup">
              {props.el && props.el.date && props.el.date.replace('T', ': ').replaceAll('-', '.').substring(0, Number(props.el.date.length) - 2)}
            </span>
          </div>
          <button
            className="button button_type_close"
            type="button"
            onMouseDown={props.closePopup}
          />
        </div>
        <div className="container__product container__product_type_order">
          <h3 className="container__subtitle">
            Товар
          </h3>
          <span className="container__marker">
            Название наименование товара
          </span>
        </div>
        { props.el && props.el.goods.map((go: good, index: number) => {
          return (<ul className="container__info container__info_type_order" key={go.id.replaceAll('-', '') + String(index)}>
            <li className="container__info container__info_type_popup">
              <h2 className="container__subtitle container__subtitle_type_product">
                {go.name}
              </h2>
              <span className="container__marker">
                товаров  {go.count}шт
              </span>
            </li>
            <li className="container__description container__description_type_item">
              <h2 className="container__subtitle container__subtitle_type_order">
                {sale ? (go.price - (go.price * Number(sale) / 100)).toFixed(2) : go.price} Р
              </h2>
            </li>
          </ul>)}
        )}
        <div className="container__product container__product_type_sale">
          <p className="container__marker">
            {sale ? `Скидка по заказу составила ${sale} %` : `Нажмите чтобы рассчитать скидку`}
          </p>
          <button
            className="button button_type_sale"
            onMouseDown={getSales}
            type="button"
            disabled={buttonActive}
          >
              Скидка составила
            </button>
          <p className="container__marker">
            Дата выдачи заказа 10 дней с момента оплаты
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;