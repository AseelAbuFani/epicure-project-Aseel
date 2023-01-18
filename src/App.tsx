import * as React from 'react';
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {Footer} from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Restaurant from './Components/Slider/SliderOfAllRestaurants/RestaurantSlider';
import AllChefsMobile from './Pages/AllChefs/AllChefsMobile';
import AllDishesMobile from './Pages/AllDishes/AllDishesMobile';
import AllRestaurantsMobile from './Pages/AllRestaurants/AllRestaurantsMobile';
import HomePage from './Pages/homePage/homePage';
import { fetchChefsData, fetchDishesData, fetchRestaurantsData } from './fetchData';
import { setRestaurants } from './Pages/AllRestaurants/RestaurantsSlicer';
import { useCallback, useEffect } from 'react';
import { setChefs } from './Pages/AllChefs/ChefsSlicer';
import { setDishes } from './Pages/AllDishes/DishesSlicer';
import ReviewDetails from './Pages/ReviewDetails';
import SpecificRestaurant from './Pages/SpcificRestaurant/SpecificRestaurant';
import SpecificDish from './Pages/SpecificDish/SpecificDish';
import Register from './Pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Restaurants from './Pages/Restaurants';
import HeaderLeftAndCenter from './Components/Header/MobileHLeftAndCenter';
import Admin from './Pages/Admin/Admin';


function App() {
  
  const dispatch  = useDispatch();
  const fetchRestaurants = useCallback(async () => {
    const restaurants = await fetchRestaurantsData();
    if (restaurants) {
      dispatch(setRestaurants(restaurants));
    }
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants])
  

  const fetchChefs = useCallback(async () => {
    const chefs = await fetchChefsData();
    if (chefs) {
      dispatch(setChefs(chefs));
    }
  }, []);

  useEffect(() => {
    fetchChefs();
  }, [fetchChefs])

  
  const fetchDishes = useCallback(async () => {
    const dishes = await fetchDishesData();
    if (dishes) {
      dispatch(setDishes(dishes));
    }
  }, []);

  useEffect(() => {
    fetchDishes();
  }, [fetchDishes])

  

  return (
   <>
   <ToastContainer/>
   <BrowserRouter>
   {(() => {
        switch (window.location.pathname) {
          case '/register':
            return <HeaderLeftAndCenter />
          case '/SpecificDish':
            return null
          case '/Admin':
            return null
          case '/SpecificRestaurant':
            return null
          default:
            return <Header/>
        }
      })()}
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/Restaurant' element={<Restaurant/>} />
        <Route path='/AllRestaurantsMobile' element={<AllRestaurantsMobile/>} />
        <Route path='/AllChefsMobile' element={<AllChefsMobile/>} />
        <Route path='/AllDishesMobile' element={<AllDishesMobile/>} />
        <Route path='/SpecificRestaurant' element={<SpecificRestaurant/>} />
        <Route path='/SpecificDish' element={<SpecificDish/>} />
        <Route path='/ReviewDetails' element={<ReviewDetails/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Restaurants' element={<Restaurants/>} />
        <Route path='/Admin' element={<Admin/>} />
    </Routes>
  </BrowserRouter>
  <Footer /> 
  </>
    
  );
  
}


export default App;
