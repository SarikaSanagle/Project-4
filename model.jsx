const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restaurantschema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    address: { type: String, require: true },
    rating: { type: Number, require: true },
  },
  {
    timestamps: true,
  },
);
const Restaurant = mongoose.model("Restaurant", restaurantschema);
module.exports = Restaurant;
