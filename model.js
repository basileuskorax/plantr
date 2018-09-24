const Sequelize = require("sequelize");
const uri = "postgres://localhost:5432/plantr";
const db = new Sequelize(uri);

const Gardener = db.define("gardeners", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define("plots", {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define("vegetables", {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

// Plot.belongsTo(Gardener);
// Gardener.hasOne(Plot);

Gardener.belongsTo(Plot);
Plot.hasOne(Gardener);

Vegetable.belongsToMany(Plot, { through: "vegetable_plot" });
Plot.belongsToMany(Vegetable, { through: "vegetable_plot" });

Gardener.belongsTo(Vegetable, { as: "favorite_vegetable" });

module.exports = db;
