const db = require("./model");

const Vegetable = db.model("vegetables");
const Gardener = db.model("gardeners");
const Plot = db.model("plots");
const VegetablePlot = db.model("vegetable_plot");

const veggies = [
  { name: "carrot", color: "orange", planted_on: new Date() },
  { name: "spinach", color: "green", planted_on: new Date() },
  { name: "squash", color: "yellow", planted_on: new Date() },
  { name: "peppers", color: "red", planted_on: new Date() },
  { name: "pumpkin", color: "orange", planted_on: new Date() }
];

const gardeners = [
  { name: "Evangelos", age: 100000 },
  { name: "Khalid", age: 4 }
];

const plots = [{ size: 50, shaded: true }, { size: 5000, shaded: false }];

db.sync({ force: false })
  .then(() => {
    console.log("Database synced!");
  })
  .catch(err => {
    console.log("Disaster! Something went wrong!");
    console.log(err);
  })
  .finally(() => {
    db.close();
  });

Vegetable.create(veggies[0])
  .then(Vegetable.create(veggies[1]))
  .then(Vegetable.create(veggies[2]))
  .then(Vegetable.create(veggies[3]))
  .then(Vegetable.create(veggies[4]));

// Plot.create(plots[1]).then()

// Gardener.create(gardeners[0]).then(gardener => {
//   Plot.create({
//     size: 50,
//     shaded: true,
//     gardenerId: gardener.id
//   });
// });

// Plot.create(plots[0]).then(plot => {
//   Gardener.create({
//     name: "Evangelos",
//     age: 100000,
//     plotId:
//   });
// });

// Vegetable.create;
// Vegetable.create();
// Vegetable.create();
// Vegetable.create();
// Vegetable.create();
