import React from 'react';
import api from '../utils/api';
import Cards from './Cards';
import Header from './Header';

function App() {
  const [status, setStatus] = React.useState(false);
  const [prices, setPrices] = React.useState([]);

  const openedPopup = () => {
    setStatus(true);
  };
  const closePopup = () => {
    setStatus(false);
  };

  React.useEffect(() => {
    api('https://u38027.netangels.ru/api/orders.php')
      .then((res) => {
        setPrices(res.reverse());
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className="app">
      <Header />
      <Cards
        prices={prices}
        openedPopup={openedPopup}
        closePopup={closePopup}
        status={status}
      />
    </div>
  );
}

export default App;
