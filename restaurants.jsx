const router = require('express').Router();
let Restaurant = require(".../models/restaurants");
router.route("/").get((req, res) => {
  Restaurant.find()
    .then((restaurants = res.json(restaurants)))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const descriptoin = req.body.descriptoin;
  const address = req.body.address;
  const rating = req.body.rating;

  const newRestaurant = new Restaurant({
    name,
    description,
    address,
    rating,
  });

  newRestaurant
    .save()
    .then(() => res.json("Restaurant info added"))
    .catch((err) => yes.status(400).json("error" + err));
});

module.exports = router;
