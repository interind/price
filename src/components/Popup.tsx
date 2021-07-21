import React from "react";

interface element {
  status: boolean,
  closePopup: () => void,
}

function Popup(props: element) {
  const classStatus = props.status && 'container_opened';
  return (
    <div className={`container container_type_popup ${classStatus}`}>
      <div className="container__card container__card_type_popup">
        <div className="container__info">
          <div className="container__info container__info_type_popup">
            <h2 className="container__subtitle container__subtitle_type_popup">
              Заказ №123
            </h2>
            <span className="container__marker container__marker_type_popup">
              Сегодня: 12:00
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
        <ul className="container__info container__info_type_order">
          <li className="container__info container__info_type_popup">
            <h2 className="container__subtitle container__subtitle_type_product">
              Ложка
            </h2>
            <span className="container__marker">
              товаров  5шт
            </span>
          </li>
          <li className="container__description container__description_type_item">
            <h2 className="container__subtitle container__subtitle_type_order">
              305 Р
            </h2>
          </li>
        </ul>
        <div className="container__product container__product_type_sale">
          <p className="container__marker">
            Скидка по заказу составила 77 %
          </p>
          <button className="button button_type_sale" type="button">Скидка составила</button>
          <p className="container__marker">
            Дата выдачи заказа 10 дней с момента оплаты
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;