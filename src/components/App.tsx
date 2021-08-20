import React from 'react';
import api from '../utils/api';
import Cards from './Cards';
import Footer from './Footer';
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
      .then((res: []): void =>  {
        setPrices(res.reverse());
        console.log(res);

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
      <Footer />
    </div>
  );
}

export default App;
