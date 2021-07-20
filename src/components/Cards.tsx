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
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
        <li className="container__card"><div className="container__product"/><span>1</span></li>
      </ul>
    </div>
  )
}

export default Cards;