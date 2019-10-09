import React from "react";

const Total = props => {
  //getting the prices array
  const pricesArray = props.car.features.map(item => item.price);

  //function to add
  const add = (a, b) => a + b;

  //using reduce to get the sum of the prices
  const sumOfPrices = pricesArray.reduce(add, 0);

  // console.log(sumOfPrices)
  // console.log(props.store.car.price)

  const totalSum = props.car.price + sumOfPrices;
  // console.log(totalSum);

  return (
    <div className="content">
      <h4>Total Amount: ${totalSum}</h4>
    </div>
  );
};

export default Total;
