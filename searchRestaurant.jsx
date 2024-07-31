import React, {useState , useEffect} from 'react';
import axios from 'axios';

function searchRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/resturants/")
      .then((response) => {
        console.log(`Hello`);
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.log(error);
        retrun;
      })
  }, []);
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((Restaurant) => (
          <li key={restaurants._id}>
            <h3>{restaurants.name}</h3>
            <p>{restaurants.description}</p>
            <p>{restaurants.address}</p>
            <p>{restaurants.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default searchRestaurant;
