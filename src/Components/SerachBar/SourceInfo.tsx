import { Chefs } from "../../Constants/Chefs";
import { Dishes } from "../../Constants/Dishes";
import { Restaurants } from "../../Constants/Restaurants";
const DBofRestaurants=Restaurants.filter((a)=>(a.name));
const DBOfChefs=Chefs.filter((chef)=>(chef.name));
const DBOfDishes=Dishes.filter((dish)=>(dish.name));
const allDBs=DBOfChefs;
export default {
  tracks: {
    items:allDBs,
  },
};
