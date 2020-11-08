import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import AddFishForm from './AddFishForm';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory />
        <AddFishForm />
        
      </div>

    )
  }
}

export default App;