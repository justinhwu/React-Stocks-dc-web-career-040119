import React from 'react'

const Stock = (props) => {
  const {stockOption: {name, price, ticker, id}} = props

  return(
  <div>

    <div className="card" onClick={(_)=> {props.handleStock(id)}}>
      <div className="card-body">
        <h5 className="card-title">
          {name}
        </h5>
        <p className="card-text">
            {ticker}: {price}
          </p>
      </div>
    </div>


  </div>
  )
};

export default Stock
