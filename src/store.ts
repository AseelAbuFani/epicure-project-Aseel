import { configureStore} from "@reduxjs/toolkit";
import restaurantsReducer  from "./Pages/AllRestaurants/RestaurantsSlicer";
import chefsReducer  from "./Pages/AllChefs/ChefsSlicer";
import dishesReducer  from "./Pages/AllDishes/DishesSlicer";



export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs: chefsReducer,
        dishes: dishesReducer,
     
    },
});