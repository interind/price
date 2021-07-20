import React from 'react';
import Cards from './Cards';
import Header from './Header';
import Popup from './Popup';

function App() {
  const [status, setStatus] = React.useState(false);

  const openedPopup = () => {
    setStatus(true);
  };
  const closePopup = () => {
    setStatus(false);
  };

  return (
    <div className="app">
      <Header />
      <Cards openedPopup={openedPopup}/>
      <Popup status={status} closePopup={closePopup} />
    </div>
  );
}

export default App;
