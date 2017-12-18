import React, { Component } from "react";
import logo from "./logo.svg";
var _ = require("lodash");

class App extends Component {
  constructor() {
    super();

    //
    // Let's get lodashin'
    //

    _.times(5, i => {
      console.log("5 whole human times?! " + i);
    });

    //

    let ownerArr = [
      {
        owner: "Colin",
        pets: [{ name: "biff" }, { name: "cat" }]
      },
      {
        owner: "John",
        pets: [{ name: "dug" }, { name: "budgie" }]
      }
    ];
    console.log(
      "\nGet deep nested values, kinda like map or filter but awesomer:"
    );
    let firstPets = _.map(ownerArr, "pets[0].name");
    console.log(firstPets);

    //

    console.log("\nPush items into an array a bunch of times:");
    let pushItems = _.times(4, _.uniqueId.bind(null, "ball_"));
    console.log(pushItems);

    //

    console.log("\nClone (deep and legit):");
    let objA = {
      name: "colin"
    };
    let objB = _.cloneDeep(objA);
    console.log(objB);

    //

    console.log("\nRandom numbers within range:");
    let random = _.random(15, 20);
    console.log(random);
    let randomFloat = _.random(15, 20, true);
    console.log(randomFloat);

    //

    console.log("\nExtending (overwriting values):");
    objA = { name: "original", car: "original", hat: "original" };
    objB = {
      car: "overwritten",
      hat: "overwritten",
      jacketColor: "newly added"
    };
    let objC = { hat: "overwritten again" };

    _.assign(objA, objB, objC); // or .extend, .assignIn, .assignInWith, etc
    console.log(objA);

    //

    console.log("\nOmit - Remove values from object (returns a new object):");
    let set = { name: "colin", car: "suzuki", age: 17 };
    let subset = _.omit(set, ["car", "age"]);
    console.log(objB);

    console.log("\nOmitby - by a type of value:");
    subset = _.omitBy(set, _.isNumber);
    console.log(subset);

    console.log("\nPick - Get certain values:");
    subset = _.pick(set, ["car", "age"]);
    console.log(subset);

    console.log("\nPickby - by a type of value:");
    subset = _.pickBy(set, _.isNumber);
    console.log(subset);

    //

    console.log("\nRandom items from an array");
    let luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];
    console.log(_.sample(luckyDraw, 2));
    //

    console.log("\n...More stuff that I don't understand yet:");

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
