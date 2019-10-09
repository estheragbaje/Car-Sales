import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import * as actionCreators from "./state/actionCreators";

// export const state = {
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: "2019 Ford Mustang",
//     image:
//       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//     features: []
//   },
//   store: [
//     { id: 1, name: "V-6 engine", price: 1500 },
//     { id: 2, name: "Racing detail package", price: 1500 },
//     { id: 3, name: "Premium sound system", price: 500 },
//     { id: 4, name: "Rear spoiler", price: 250 }
//   ]
// };

const App = props => {
  const { store } = props;
  // const state = testState;
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={store.car} />
        <AddedFeatures car={store.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store.store} />
        <Total car={store.car} additionalPrice={store.additionalPrice} />
      </div>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(App);
