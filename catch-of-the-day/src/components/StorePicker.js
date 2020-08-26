import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {
  goToStore() {
    console.log("going to store")
  }
    render() {
    return <form className="store-selector" onSubmit={this.goToStore}>
      <h2>
        Please Enter a Store
      </h2>
      <input type="text" 
      required 
      placeholder="Store Name"
      defaultValue={getFunName()} />
      <button type="Submit">Visit Store</button>
    </form>
  }
}

export default StorePicker;