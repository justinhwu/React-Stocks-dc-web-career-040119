import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      allStocks: [],
      portfolio: [],
      checked: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stockObjs => {
      this.setState({
        allStocks: stockObjs
      })
    })
  }

  addStock = (id) => {
    let myStock = this.state.allStocks.find((stock)=>{
      return stock.id===id
    })
    // Creates a copy of portfolio
    // let portfolioCopy = [...this.state.portfolio]
    // set line 34 -> [...portfolioCopy, myStock]
    this.setState({
      portfolio: [...this.state.portfolio, myStock]
    })
  }

  removeStock = (id) => {

    // One Method of doing this
    let copy = [...this.state.portfolio]
    let index = this.state.portfolio.findIndex((stock)=>{
      return stock.id === id
    })
    copy.splice(index, 1)
    //setState of portfolio to the copy

    // let myRemainingStocks = this.state.portfolio.filter((stock)=> {
    //   return stock.id !== id
    // })

    this.setState({
      portfolio: copy
    })
  }

  handleSort = (event) => {
    let copy = [...this.state.allStocks]
    if(event.target.value==='Alphabetically'){
    copy.sort((a,b)=>{
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0
      })
    }
    else if(event.target.value==='Price'){
      copy.sort((a,b)=> {return a.price - b.price})
    }
    this.setState({
      allStocks: copy,
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <div>
        <SearchBar handleSort={this.handleSort} checked={this.state.checked}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.allStocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
