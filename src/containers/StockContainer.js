import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stockOption, index)=>(
            <Stock stockOption={stockOption} key={index+1} handleStock={this.props.addStock}/>
          ))
        }
      </div>
    );
  }

}

export default StockContainer;
