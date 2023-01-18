import React, { useState } from 'react'
import 'react-slideshow-image/dist/styles.css';
import '../SliderOfAllRestaurants/StyledSlider.ts'
import { ResComponent, SlideContainer, YossiResComponent, YossiSlideContainer } from '../SliderOfAllRestaurants/StyledSlider';
import { useSelector } from 'react-redux';
import { IRestaurant } from '../../Intefaces/IRestaurant';
import { ColResComponent } from '../../../Pages/AllRestaurants/Restaurants.Styled';



const RestaurantsForYossi=()=>{
    const chefs = useSelector((state:any) => state.chefs.value);
    const restaurants = useSelector((state:any) => state.restaurants.value);
    const findChef = chefs.filter((chef:any) => {
        return chef.name === "Yossi Shitrit";
      });
 return <>
      <YossiSlideContainer>
      {/* {findChef.chefsRestaurants.map((chefRes:any)=>restaurants.map((res:any)=>res._id==chefRes?
                <ColResComponent >
                <img src={res.image} />
                <div>{res.name}</div>
              </ColResComponent>
                :""))}
      */}
     </YossiSlideContainer>
    

 </>
}
export default RestaurantsForYossi;