import React, { Component } from "react";
import logo from "./logo.svg";
var _ = require("lodash");

class App extends Component {
  constructor() {
    super();

    // Let's get lodashin'
    let test1 = _.defaults({ a: 1 }, { a: 3, b: 2 });
    console.log(test1); // → { 'a': 1, 'b': 2 }
    let test2 = _.partition([1, 2, 3, 4], n => n % 2);
    console.log(test2); // → [[1, 3], [2, 4]]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lodash Research</h1>
        </header>
        <main>Boom</main>
      </div>
    );
  }
}

export default App;
